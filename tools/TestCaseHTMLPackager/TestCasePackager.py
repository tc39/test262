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

#--Globals---------------------------------------------------------------------
MAX_CASES_PER_JSON = 1000

__parser = argparse.ArgumentParser(description='Tool used to generate the test262 website')
__parser.add_argument('version', action='store',
                    help='Version of the test suite.')
ARGS = __parser.parse_args()

#Path to the root of the Hg repository (relative to this file's location)
TEST262_ROOT = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "..")
TEST262_ROOT = os.path.abspath(TEST262_ROOT)

#Directory full of test cases we want to port to the website's test harness runner
TEST262_CASES_DIR = os.path.join(TEST262_ROOT, "test", "suite")

#Directory containing test harness files to be ported over to the website. Note that
#only *.js files will be migrated from this dir.
TEST262_HARNESS_DIR = os.path.join(TEST262_ROOT, "test", "harness")

#Directory full of website test cases (ported over from TEST262_CASES_DIR)
TEST262_WEB_CASES_DIR = os.path.join(TEST262_ROOT, "website", "resources", "scripts", "testcases")

#Directory containing the website's test harness (ported over from TEST262_HARNESS_DIR)
TEST262_WEB_HARNESS_DIR = os.path.join(TEST262_ROOT, "website", "resources", "scripts", "global")

#Path to the ported test case files on the actual website as opposed to the Hg layout
WEBSITE_CASES_PATH = "resources/scripts/testcases/"

#The name of a file which contains a list of tests which should be disabled in test262.
#These tests are either invalid as-per ES5 or have issues with the test262 web harness.
EXCLUDED_FILENAME = os.path.join(TEST262_ROOT, "test", "config", "excludelist.xml")

if not os.path.exists(EXCLUDED_FILENAME):
    print "Cannot generate (JSON) test262 tests without a file, %s, showing which tests have been disabled!" % EXCLUDED_FILENAME
    sys.exit(1)
EXCLUDE_LIST = xml.dom.minidom.parse(EXCLUDED_FILENAME)
EXCLUDE_LIST = EXCLUDE_LIST.getElementsByTagName("test")
EXCLUDE_LIST = [x.getAttribute("id") for x in EXCLUDE_LIST]

#Directories under "test\suite\" containing ES5 test chapter directories
#with *.js tests underneath them
TEST_CONTRIB_DIRS = ["sputnik_converted", "ietestcenter"]

#a list of all ES5 test chapter directories
TEST_SUITE_SECTIONS = []

#--Sanity checks--------------------------------------------------------------#
if not os.path.exists(TEST262_CASES_DIR):
    print "Cannot generate (JSON) test262 tests when the path containing said tests, %s, does not exist!" % TEST262_CASES_DIR
    sys.exit(1)

if not os.path.exists(TEST262_HARNESS_DIR):
    print "Cannot copy the test harness from a path, %s, that does not exist!" % TEST262_HARNESS_DIR
    sys.exit(1)

if not os.path.exists(TEST262_WEB_CASES_DIR):
    print "Cannot generate (JSON) test262 test cases to %s when it does not exist!" % TEST262_WEB_CASES_DIR
    sys.exit(1)

if not os.path.exists(TEST262_WEB_HARNESS_DIR):
    print "Cannot copy test262 test harness to %s when it does not exist!" % TEST262_WEB_HARNESS_DIR
    sys.exit(1)

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
    else:
        raise Exception("getJSCount: encountered a non-file/non-dir!")
    return retVal

#------------------------------------------------------------------------------
def dirWalker(dirName):
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
for tempDirName in TEST_CONTRIB_DIRS:
    if not os.path.exists(os.path.join(TEST262_CASES_DIR, tempDirName)):
        print "The expected ES5 test directory, TEST262_CASES_DIR\$tempDirName, did not exist!"
        sys.exit(1)
    dirWalker(os.path.join(TEST262_CASES_DIR, tempDirName))

NUM_TESTS = 0
#total number of tests accross the entire set of tests.
TOTAL_TEST_COUNT = 0



#--HELPERS---------------------------------------------------------------------
multilineComment = False

def isTestStarted(line):
    #Note this is a naive approach on the sense that "/*abc*/" could be on one
    #line.  However, we know for a fact this is not the case in IE Test Center
    #or Sputnik tests.
    global multilineComment

    if multilineComment and ("*/" in line): #End of a newline comment
        multilineComment = False
        return False
    elif "/*" in line:  #Beginning of a newline comment
        multilineComment = True
        return False
    elif multilineComment: #//we're already in a multi-line comment that hasn't ended
        return False
    elif "//" in line:     #//blah
        return False
    elif re.match("^\s*$", line)!=None: #newlines
        return False
    elif "ES5Harness" in line: #definitely start of the test!
        return True
    return True

#--MAIN------------------------------------------------------------------------
testSuite = []
count = 0

def getAllJSFiles(dirName):
    retVal = []
    for fullPath,dontCare,files in os.walk(dirName):
        retVal += [os.path.join(fullPath,b) for b in files if b.endswith(".js")]
    return retVal

for chapter in TEST_SUITE_SECTIONS:
    chapterName = chapter.rsplit(os.path.sep, 1)[1]
    print "Generating test cases for ES5 chapter:", chapterName
    #create dictionaries for all our tests and a section
    testsList = {}
    sect = {}
    
    sectionName ="Chapter - " + chapterName
    sect["name"] = sectionName
    #create an array for tests in a chapter
    tests = []
    sourceFiles = getAllJSFiles(chapter)
    if len(sourceFiles)!=0:
        excluded=0
        testCount = 0
        for test in sourceFiles:
            testName=test.rsplit(".", 1)[0] #12.4.6
            testName=testName.rsplit(os.path.sep, 1)[1]
            if EXCLUDE_LIST.count(testName)==0:
                # dictionary for each test
                testDict = {}
                testDict["id"] = testName
                
                tempFile = open(test, "r")
                scriptCode = tempFile.readlines()
                tempFile.close()
                scriptCodeContent=""
                #Rip out license headers that add unnecessary bytes to the JSON'ized test cases
                inBeginning = True
                multilineComment = False

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
                excluded = excluded + 1

        #we have completed our tests
        NUM_TESTS = str(len(sourceFiles)-excluded)

        # add section node, number of tests and the tests themselves.
        sect["numTests"] = NUM_TESTS
        sect["tests"] = tests

        #create a node for the tests and add it to our testsLists
        testsList["testsCollection"] = sect
        
        testGroupPathname = TEST262_WEB_CASES_DIR + os.path.sep + chapterName + ".json"

        #if you want to use jsmin to minimize the .json file, use the 2nd line. Otherwise 1st
        with open(testGroupPathname, "w") as f:
            json.dump(testsList, f, separators=(',',':'), sort_keys=True)

        #add the name of the chapter test to our complete list
        filename = WEBSITE_CASES_PATH + chapterName + ".json"
        testSuite.append(filename)
        count += 1
        TOTAL_TEST_COUNT += len(sourceFiles) - excluded

#we now have the list of files for each chapter
#create a root node for our suite
testSuiteRoot = {}
#create suiteversion node
#create a date node
dateStr = str(datetime.datetime.now().date())
#add the nodes to our suites dictionary
testSuiteRoot["numTests"] = TOTAL_TEST_COUNT
testSuiteRoot["version"] = ARGS.version
testSuiteRoot["date"] = dateStr
testSuiteRoot["testSuite"] = testSuite
testcaseslistPathName = TEST262_WEB_CASES_DIR + os.path.sep + "testcaseslist.json"

with open(testcaseslistPathName, "w") as f:
    json.dump(testSuiteRoot, f, separators=(',',':'), sort_keys=True)

#Deploy test harness to website as well
print ""
print "Deploying test harness files to 'TEST262_WEB_HARNESS_DIR'..."
for filename in [x for x in os.listdir(TEST262_HARNESS_DIR) if x.endswith(".js")]:
    shutil.copy(os.path.join(TEST262_HARNESS_DIR, filename),
                os.path.join(TEST262_WEB_HARNESS_DIR, filename))
print "Done."
