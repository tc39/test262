# Copyright (c) 2009 Microsoft Corporation 
# 
# Redistribution and use in source and binary forms, with or without modification, are permitted provided
# that the following conditions are met: 
#    * Redistributions of source code must retain the above copyright notice, this list of conditions and
#      the following disclaimer. 
#    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
#      the following disclaimer in the documentation and/or other materials provided with the distribution.  
#    * Neither the name of Microsoft nor the names of its contributors may be used to
#      endorse or promote products derived from this software without specific prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
# IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
# FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
# ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#--Imports---------------------------------------------------------------------
import argparse
import os
import sys
import xml.dom.minidom
import base64
import datetime
import shutil
import re
import json
import stat

#--Stubs-----------------------------------------------------------------------
def generateHarness(harnessType, jsonFile, description):
    pass


#------------------------------------------------------------------------------
from TestCasePackagerConfig import *

#--Globals---------------------------------------------------------------------

__parser = argparse.ArgumentParser(description='Tool used to generate the test262 website')
__parser.add_argument('version', action='store',
                    help='Version of the test suite.')
__parser.add_argument('--type', action='store', default='test262',
                    help='Type of test case runner to generate.')
ARGS = __parser.parse_args()

if not os.path.exists(EXCLUDED_FILENAME):
    print "Cannot generate (JSON) test262 tests without a file, %s, showing which tests have been disabled!" % EXCLUDED_FILENAME
    sys.exit(1)
EXCLUDE_LIST = xml.dom.minidom.parse(EXCLUDED_FILENAME)
EXCLUDE_LIST = EXCLUDE_LIST.getElementsByTagName("test")
EXCLUDE_LIST = [x.getAttribute("id") for x in EXCLUDE_LIST]

#a list of all ES5 test chapter directories
TEST_SUITE_SECTIONS = []

#total number of tests accross the entire set of tests.
TOTAL_TEST_COUNT = 0

#global which states whether the test case we're currently processing is in 
#the midst of a "/* ... */" style comment
IS_MULTILINE_COMMENT = False

#List of all *.json files containing encoded test cases
SECTIONS_LIST = []

ONE_JSON_PER_CHAPTER = False
TESTCASELIST_PER_JSON = False

#--Sanity checks--------------------------------------------------------------#
if not os.path.exists(TEST262_CASES_DIR):
    print "Cannot generate (JSON) test262 tests when the path containing said tests, %s, does not exist!" % TEST262_CASES_DIR
    sys.exit(1)

if not os.path.exists(TEST262_HARNESS_DIR):
    print "Cannot copy the test harness from a path, %s, that does not exist!" % TEST262_HARNESS_DIR
    sys.exit(1)

if not os.path.exists(TEST262_WEB_CASES_DIR):
    os.mkdir(TEST262_WEB_CASES_DIR)

if not os.path.exists(TEST262_WEB_HARNESS_DIR):
    os.mkdir(TEST262_WEB_HARNESS_DIR)

if not hasattr(ARGS, "version"):
    print "A test262 suite version must be specified from the command-line to run this script!"
    sys.exit(1)

#--Helpers--------------------------------------------------------------------#
def getJSCount(dirName):
    '''
    Returns the total number of *.js files (recursively) under a given 
    directory, dirName.
    '''
    retVal = 0
    if os.path.isfile(dirName) and dirName.endswith(".js"):
        retVal = 1
    elif os.path.isdir(dirName):
        tempList = [os.path.join(dirName, x) for x in os.listdir(dirName)]
        for x in tempList:
            retVal += getJSCount(x)
    #else:
    #    raise Exception("getJSCount: encountered a non-file/non-dir!")
    return retVal

#------------------------------------------------------------------------------
def dirWalker(dirName):
    '''
    Populates TEST_SUITE_SECTIONS with ES5 test directories based
    upon the number of test files per directory.
    '''
    global TEST_SUITE_SECTIONS
    #First check to see if it has test files directly inside it
    temp = [os.path.join(dirName, x) for x in os.listdir(dirName) if not os.path.isdir(os.path.join(dirName, x))]
    if len(temp)!=0:
        TEST_SUITE_SECTIONS.append(dirName)
        return

    #Next check to see if all *.js files under this directory exceed our max
    #for a JSON file
    temp = getJSCount(dirName)
    if temp==0:
        print "ERROR:  expected there to be JavaScript tests under dirName!"
        sys.exit(1)
    elif temp < MAX_CASES_PER_JSON:
        TEST_SUITE_SECTIONS.append(dirName)
        return
    else:
        #Max has been exceeded.  We need to look at each subdir individually
        temp = os.listdir(dirName)
        for tempSubdir in temp:
            dirWalker(os.path.join(dirName, tempSubdir))

#------------------------------------------------------------------------------
def isTestStarted(line):
    '''
    Used to detect if we've gone past extraneous test comments in a test case.
    
    Note this is a naive approach on the sense that "/*abc*/" could be on one
    line.  However, we know for a fact this is not the case in IE Test Center
    or Sputnik tests.
    '''
    global IS_MULTILINE_COMMENT

    if IS_MULTILINE_COMMENT and ("*/" in line): #End of a newline comment
        IS_MULTILINE_COMMENT = False
        return False
    elif "/*" in line:  #Beginning of a newline comment
        IS_MULTILINE_COMMENT = True
        return False
    elif IS_MULTILINE_COMMENT: #//we're already in a multi-line comment that hasn't ended
        return False
    elif re.match("^\s*//", line)!=None:     #//blah
        return False
    elif re.match("^\s*$", line)!=None: #newlines
        return False
    elif "ES5Harness" in line: #definitely start of the test!
        return True
    return True

#------------------------------------------------------------------------------
def getAllJSFiles(dirName):
    retVal = []
    for fullPath,dontCare,files in os.walk(dirName):
        retVal += [os.path.join(fullPath,b) for b in files if b.endswith(".js")]
    return retVal

#--MAIN------------------------------------------------------------------------
for temp in TEST_CONTRIB_DIRS:
    temp = os.path.join(TEST262_CASES_DIR, temp)
    if not os.path.exists(temp):
        print "The expected ES5 test directory,", temp, "did not exist!"
        sys.exit(1)
    
    if not ONE_JSON_PER_CHAPTER:
        dirWalker(temp)
    else:
        for tempSubdir in os.listdir(temp): 
            TEST_SUITE_SECTIONS.append(os.path.join(temp, tempSubdir))
        

for chapter in TEST_SUITE_SECTIONS:
    chapterName = chapter.rsplit(os.path.sep, 1)[1]
    print "Generating test cases for ES5 chapter:", chapterName
    #create dictionaries for all our tests and a section
    testsList = {}
    sect = {}
    sect["name"] = "Chapter - " + chapterName
    
    #create an array for tests in a chapter
    tests = []
    sourceFiles = getAllJSFiles(chapter)
    
    if len(sourceFiles)!=0:
        excluded = 0
        testCount = 0
        for test in sourceFiles:
            #TODO - use something other than the hard-coded 'TestCases' below
            testPath =  "TestCases" + test.split(TEST262_CASES_DIR, 1)[1].replace("\\", "/")
            testName=test.rsplit(".", 1)[0] 
            testName=testName.rsplit(os.path.sep, 1)[1]
            if EXCLUDE_LIST.count(testName)==0:
                # dictionary for each test
                testDict = {}
                testDict["id"] = testName
                testDict["path"] = testPath.replace("/ietestcenter", "").replace("/sputnik_converted", "")
                
                tempFile = open(test, "r")
                scriptCode = tempFile.readlines()
                tempFile.close()
                scriptCodeContent=""
                #Rip out license headers that add unnecessary bytes to the JSON'ized test cases
                inBeginning = True
                IS_MULTILINE_COMMENT = False

                for line in scriptCode:
                    if inBeginning:
                        isStarted = isTestStarted(line)
                        if not isStarted:
                            continue
                        inBeginning = False
                    scriptCodeContent += line

                if scriptCodeContent=="":
                    print "WARNING (" + test + "): unable to strip comments/license header/etc."
                    scriptCodeContent = "".join(scriptCode)
                scriptCodeContent = base64.b64encode(scriptCodeContent)

                #add the test encoded code node to our test dictionary
                testDict["code"] = scriptCodeContent 
                #now close the dictionary for the test

                #this adds the test to our tests array
                tests.append(testDict)
                testCount += 1
            else:
                print "Excluded:", testName
                excluded = excluded + 1

        #we have completed our tests
        # add section node, number of tests and the tests themselves.
        sect["numTests"] = str(len(sourceFiles)-excluded)
        sect["tests"] = tests

        #create a node for the tests and add it to our testsLists
        testsList["testsCollection"] = sect
        with open(os.path.join(TEST262_WEB_CASES_DIR, chapterName + ".json"), "w") as f:
            json.dump(testsList, f, separators=(',',':'), sort_keys=True)


        if TESTCASELIST_PER_JSON:
            CHAPTER_TEST_CASES_JSON = {}
            CHAPTER_TEST_CASES_JSON["numTests"] = int(sect["numTests"])
            CHAPTER_TEST_CASES_JSON["version"] = ARGS.version
            CHAPTER_TEST_CASES_JSON["date"] = str(datetime.datetime.now().date())
            CHAPTER_TEST_CASES_JSON["testSuite"] = [WEBSITE_CASES_PATH + chapterName + ".json"]
            with open(os.path.join(TEST262_WEB_CASES_DIR, "testcases_%s.json" % chapterName), "w") as f:
                json.dump(CHAPTER_TEST_CASES_JSON, f, separators=(',',':'), sort_keys=True)
            generateHarness(ARGS.type, "testcases_%s.json" % chapterName, chapterName.replace("chapter", "Chapter "))

        #add the name of the chapter test to our complete list
        SECTIONS_LIST.append(WEBSITE_CASES_PATH + chapterName + ".json")
        TOTAL_TEST_COUNT += int(sect["numTests"])


#we now have the list of files for each chapter
#create a root node for our suite
TEST_CASES_JSON = {}
TEST_CASES_JSON["numTests"] = TOTAL_TEST_COUNT
TEST_CASES_JSON["version"] = ARGS.version
TEST_CASES_JSON["date"] = str(datetime.datetime.now().date())
TEST_CASES_JSON["testSuite"] = SECTIONS_LIST
with open(os.path.join(TEST262_WEB_CASES_DIR, "default.json"), "w") as f:
    json.dump(TEST_CASES_JSON, f, separators=(',',':'), sort_keys=True)
generateHarness(ARGS.type, "default.json", "Chapters 1-16")

#Deploy test harness to website as well
print ""
print "Deploying test harness files to 'TEST262_WEB_HARNESS_DIR'..."
if TEST262_HARNESS_DIR!=TEST262_WEB_HARNESS_DIR:
    for filename in [x for x in os.listdir(TEST262_HARNESS_DIR) if x.endswith(".js")]:
        toFilename = os.path.join(TEST262_WEB_HARNESS_DIR, filename)
        fileExists = os.path.exists(toFilename)
        if fileExists:
            SC_HELPER.edit(toFilename)
        shutil.copy(os.path.join(TEST262_HARNESS_DIR, filename),
                    toFilename)
        if not fileExists:
            SC_HELPER.add(toFilename)

#Copying the global scope files over as well
#TODO: really the HTML harness file should be generated as well...
print ""
print "Deploying global scope metadata files to 'TEST262_WEB_HARNESS_DIR'..."
for gsf in GLOBAL_SCOPE_FILES:
    toFilename = os.path.join(TEST262_WEB_CASES_DIR, gsf)
    fileExists = os.path.exists(toFilename)
    if fileExists:
        SC_HELPER.edit(toFilename)
    shutil.copy(os.path.join(TEST262_CASES_DIR, gsf),
                toFilename)
    if not fileExists:
        SC_HELPER.add(toFilename)

print "Done."
