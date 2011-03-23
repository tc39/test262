import argparse
import os
import sys
import xml.dom.minidom
import base64
import datetime
import shutil
import re

max_tests_per_json = 1000

parser = argparse.ArgumentParser(description='Tool used to generate the test262 website')
parser.add_argument('version', action='store',
                    help='Version of the test suite.')
args = parser.parse_args()

cur_path = os.path.dirname(os.path.realpath(__file__))
test262_root = os.path.join(cur_path, "..", "..")
test262_root = os.path.abspath(test262_root)
root_dir = os.path.join(test262_root, "test", "suite")
web_root_path = os.path.join(test262_root, "website", "resources", "scripts", "testcases")
web_root_path_on_server = "resources/scripts/testcases/"
exclude_list_filename = os.path.join(test262_root, "test", "config", "excludelist.xml")
test_harness_dir = os.path.join(test262_root, "test", "harness")
test_harness_website_dir = os.path.join(test262_root, "website", "resources", "scripts", "global")
test_harness_files = [x for x in os.listdir(test_harness_dir) if x.endswith(".js")]

#--Sanity checks--------------------------------------------------------------#
if not os.path.exists(root_dir):
    print "Cannot generate (JSON) test262 tests when the path containing said tests, root_dir, does not exist!"
    sys.exit(1)

if not os.path.exists(web_root_path):
    print "Cannot generate (JSON) test262 tests to 'web_root_path' when it does not exist!"
    sys.exit(1)

if not os.path.exists(exclude_list_filename):
    print "Cannot generate (JSON) test262 tests without a file, exclude_list_filename, showing which tests have been disabled!"
    sys.exit(1)

if not hasattr(args, "version"):
    print "A test262 suite version must be specified to run this script!"
    sys.exit(1)

if len(test_harness_files) < 3:
    print "There are less than five test harness files under test_harness_dir. Something must be wrong!"
    sys.exit(1)

#--Globals--------------------------------------------------------------------#

#Directories under "test\suite\" containing ES5 test chapter directories
#with *.js tests underneath them
contribution_dirs = ["sputnik_converted", "ietestcenter"]

#a list of all ES5 test chapter directories
chapters = []

#------------------------------------------------------------------------------
def getJSCount(dirName):
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
    #First check to see if it has test files directly inside it
    temp = [os.path.join(dirName, x) for x in os.listdir(dirName) if not os.path.isdir(os.path.join(dirName, x))]
    if len(temp)!=0:
        chapters.append(dirName)
        return

    #Next check to see if all *.js files under this directory exceed our max
    #for a JSON file
    temp = getJSCount(dirName)
    if temp==0:
        print "ERROR:  expected there to be JavaScript tests under dirName!"
        sys.exit(1)
    elif temp < max_tests_per_json:
        chapters.append(dirName)
        return
    else:
        #Max has been exceeded.  We need to look at each subdir individually
        temp = os.listdir(dirName)
        for tempSubdir in temp:
            dirWalker(os.path.join(dirName, tempSubdir))

#------------------------------------------------------------------------------
for tempDirName in contribution_dirs:
    if not os.path.exists(os.path.join(root_dir, tempDirName)):
        print "The expected ES5 test directory, root_dir\$tempDirName, did not exist!"
        sys.exit(1)
    dirWalker(os.path.join(root_dir, tempDirName))

num_tests=0
#total number of tests accross the entire set of tests.
total_num_tests=0

excludeList = xml.dom.minidom.parse(exclude_list_filename)
excludeList = excludeList.getElementsByTagName("test")
excludeList = [x.getAttribute("id") for x in excludeList]

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
#add quotes around a string to package it in JSON
def Encode(tstr):
    return '"' + str(tstr) + '"'

#the following functions open and close json dictionary and array
def OpenDict():
    return "{"

def CloseDict(d):
    return d + "}"

def OpenArray():
    return "["

def CloseArray(a):
    return a + "]"

#add a node to an open dictionary. If it is first, do not add a comma.
#Some json parsers are sensitive and won't parse if the last element has a comma at the end
def AddDictNode(d, n, IsFirst):
    if IsFirst:
        o = d+n
    else:
        o = d + "," + n
    return o

#add a node to an open array
def AddArrayElement(a, n, IsFirst):
    if IsFirst:
        o = a + n
    else:
        o = a + "," + n
    return o

#this creates a dictionary node for a given key and value which is non-string
def CreateNode(k, v):
    t = Encode(k)
    return t + ":" + str(v)

# a similar node except where the value is a string
def CreateStringNode(a, b):
    t1 = Encode(a)
    t2 = Encode(b)
    return t1 + ":" + t2

#TODO...
def IsNullOrEmpty(str):
    if (str):
        return False
    else:
        return True

testSuite = OpenArray()
count = 0

def getAllJSFiles(dirName):
    retVal = []
    for fullPath,dontCare,files in os.walk(dirName):
        retVal += [os.path.join(fullPath,b) for b in files if b.endswith(".js")]
    return retVal

for chapter in chapters:
    chapterName = chapter.rsplit(os.path.sep, 1)[1]
    print "Generating test cases for ES5 chapter:", chapterName
    #create dictionaries for all our tests and a section
    testsList = OpenDict()
    sect = OpenDict()
    sectionName ="Chapter - " + chapterName
    sectionNameNode = CreateStringNode("name", sectionName)
    #create an array for tests in a chapter
    tests = OpenArray()
    sourceFiles = getAllJSFiles(chapter)
    if len(sourceFiles)!=0:
        excluded=0
        testCount = 0
        for test in sourceFiles:
            testName=test.rsplit(".", 1)[0] #12.4.6
            testName=testName.rsplit(os.path.sep, 1)[1]
            if excludeList.count(testName)==0:
                # dictionary for each test
                testDict = OpenDict()
                idNode = CreateStringNode("id", testName)
                #id node is our first node in the test dictionary
                testDict = AddDictNode(testDict, idNode, True)
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

                codeNode = CreateStringNode("code", scriptCodeContent)
                #add the test encoded code node to our test dictionary
                testDict = AddDictNode(testDict, codeNode, False)
                #now close the dictionary for the test
                testDict = CloseDict(testDict)

                #this adds the test to our tests array. Should we add a comma or not
                if testCount==0:
                    tests = AddArrayElement(tests, testDict, True)
                else:
                    tests = AddArrayElement(tests, testDict, False)
                testCount += 1
            else:
                excluded = excluded + 1

        #we have completed our tests. Close the tests array
        tests = CloseArray(tests)
        testsNode = CreateNode ("tests", tests)

        num_tests = str(len(sourceFiles)-excluded)
        #number of tests in our chapter. Create a node
        num_testsNode = CreateStringNode("numTests", num_tests)

        # add sectiopn node, number of tests and the tests themselves.
        sect = AddDictNode(sect, sectionNameNode, True)
        sect = AddDictNode(sect, num_testsNode, False)
        sect = AddDictNode(sect, testsNode, False)
        #close the section dictionary node
        sect = CloseDict(sect)

        #create a node for the tests and add it to our testsLists
        testCollectionNode = CreateNode("testsCollection", sect)
        testsList = AddDictNode(testsList, testCollectionNode, True)
        testsList = CloseDict(testsList)

        testGroupPathname = web_root_path + os.path.sep + chapterName + ".json"

        #if you want to use jsmin to minimize the .json file, use the 2nd line. Otherwise 1st
        with open(testGroupPathname, "w") as f:
            f.write(testsList)

        #add the name of the chapter test to our complete list
        filename = web_root_path_on_server + chapterName + ".json"
        filenameEnc = Encode(filename)
        if count==0:
            testSuite = AddArrayElement(testSuite, filenameEnc, True)
        else:
            testSuite = AddArrayElement(testSuite, filenameEnc, False)
        count += 1
        total_num_tests += len(sourceFiles) - excluded

#we now have the list of files for each chapter. Close that array
testSuite = CloseArray(testSuite)
#create a root node for our suite
testSuiteRoot = OpenDict()
#create a node for total number of tests across all chapters
total_num_testsNode = CreateNode("numTests", total_num_tests)
#create suiteversion node
args.versionEnc = Encode(args.version)
args.versionNode = CreateNode("version", args.versionEnc)
#create a date node
dateStr = str(datetime.datetime.now().date())
dateEnc = Encode(dateStr)
dateNode = CreateNode("date", dateEnc)
#add the nodes to our suites dictionary
testSuiteRoot = AddDictNode(testSuiteRoot,total_num_testsNode, True)
testSuiteRoot = AddDictNode(testSuiteRoot, args.versionNode, False)
testSuiteRoot = AddDictNode(testSuiteRoot, dateNode, False)
testSuiteNode = CreateNode("testSuite", testSuite)
testSuiteRoot = AddDictNode(testSuiteRoot, testSuiteNode, False)
#close the testsuite and write it to the root file
testSuiteRoot = CloseDict(testSuiteRoot)
testcaseslistPathName = web_root_path + os.path.sep + "testcaseslist.json"

with open(testcaseslistPathName, "w") as f:
    f.write(testSuiteRoot)

#Deploy test harness to website as well
print ""
print "Deploying test harness files to 'test_harness_website_dir'..."
for filename in test_harness_files:
    shutil.copy(os.path.join(test_harness_dir, filename),
                os.path.join(test_harness_website_dir, filename))
print "Done."
