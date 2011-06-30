# Copyright (c) 2011 Microsoft Corporation 
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
import re

#--Globals---------------------------------------------------------------------
PRE_PATH = "TestCases/"

#------------------------------------------------------------------------------
def getAllJSFiles(dirName):
    '''
    Returns all JS files under dirName
    '''
    retVal = []
    if os.path.isfile(dirName) and dirName.endswith(".js"):
        retVal = [dirName]
    elif os.path.isdir(dirName):
        tempList = [os.path.join(dirName, x) for x in os.listdir(dirName)]
        for x in tempList:
            retVal += getAllJSFiles(x)
    #else:
    #    raise Exception("getAllJSFiles: encountered a non-file/non-dir:" + dirName)
    return retVal

#------------------------------------------------------------------------------
def handleFile(filePath, partialPath):
    global PRE_PATH
    
    tempPath = filePath.replace(partialPath + os.path.sep, "", 1)
    tempPath = tempPath.replace(os.path.sep, "/")
    tempId   = tempPath.rsplit("/", 1)[1][:-3]
    
    with open(filePath, "r") as f:
        origLines = f.readlines()
    
    with open(filePath, "w") as f:
        pathHit = False
        idHit = False
        testHit = False
        descriptHit = False
        
        for line in origLines:
            if (not testHit) and re.match("^$", line)!=None:
                #Throw away empty lines until we hit the first test function
                continue
            elif (not testHit) and re.search("test\s*:\s*function\s+testcase\(\)", line)!=None:
                testHit = True
                line = line.rstrip() + os.linesep
            elif (not pathHit) and re.search("path\s*:\s*\"", line)!=None:
                pathHit = True
                line = "path: \"%s\",%s" % (PRE_PATH + tempPath, os.linesep)
            elif (not idHit) and re.search("id\s*:\s*\"", line)!=None:
                idHit = True
                line = "id: \"%s\",%s" % (tempId, os.linesep)
            elif (not descriptHit) and re.search("description\s*:\s*\"", line)!=None:
                descriptHit = True
                line = line.strip() + os.linesep
            f.write(line)

def getPartialPath(tc):
    tc = os.path.splitext(os.path.basename(tc))[0]
    if not ("-" in tc):
        print "'-' not detected in '%s'; cannot continue!" % tc
        sys.exit(1)
    elif not ("." in tc):
        tc = tc.replace("-", ".0-", 1)
    
    #Generate the partial path of the test case
    tempList = tc.split("-",1)[0].split(".")
    partialPath = ""
    for i in xrange(1, len(tempList)+1):
        partialPath += ".".join(tempList[0:i]) + os.path.sep
    partialPath = os.path.join(partialPath, tc + ".js")
    if partialPath.index(os.path.sep)==1:
        partialPath = "chapter0" + partialPath
    elif partialPath.index(os.path.sep)==2:
        partialPath = "chapter" + partialPath
    return partialPath


#--Main------------------------------------------------------------------------
if __name__=="__main__":
    __parser = argparse.ArgumentParser(description='Tool used to fix the id and path properties of test case objects')
    __parser.add_argument('path', action='store',
                          help='Full path to test cases. E.g., C:\repos\test262-msft\test\suite\ietestcenter')
    __parser.add_argument('add', action='store',
                          help='Command used to add a test file to source control')
    __parser.add_argument('del', action='store',
                          help='Command used to remove a test file from source control')
    __parser.add_argument('tc', action='store',
                          help='test case to move')
                          
    ARGS = __parser.parse_args()
    if not os.path.exists(ARGS.path):
        print "Cannot fix tests in '%s' when it doesn't exist!" % ARGS.path
        sys.exit(1)
    elif not os.path.isfile(ARGS.tc):
        print "Cannot move '%s' when it doesn't exist!" % ARGS.tc
        
    partialPath = getPartialPath(ARGS.tc)
    
    
    print "Done!", partialPath