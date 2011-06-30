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

#List of regular expressions covering suspect code snippets which might be
#invalid from an ES5 POV
QUESTIONABLE_RE_LIST = ["window", 
                        "document(?!ation)",
                        "alert",
                        "setTimeout",
                        "ActiveX",
                        ]
QUESTIONABLE_RE_LIST = [re.compile(x, re.I) for x in QUESTIONABLE_RE_LIST]

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
def handleFile(filePath):
    with open(filePath, "r") as f:
        origLines = f.readlines()
    
    for line in origLines:
        for tempRe in QUESTIONABLE_RE_LIST:
            if tempRe.search(line)!=None:
                print filePath
                print "\t", line

#--Main------------------------------------------------------------------------
if __name__=="__main__":
    __parser = argparse.ArgumentParser(description='Tool used to detect (potentially) invalid test cases')
    __parser.add_argument('tpath', action='store',
                          help='Full path to test cases. E.g., C:\repos\test262-msft\test\suite\ietestcenter')
    ARGS = __parser.parse_args()
    if not os.path.exists(ARGS.tpath):
        print "Cannot examine tests in '%s' when it doesn't exist!" % ARGS.tpath
        sys.exit(1)
    
    ALL_JS_FILES = getAllJSFiles(ARGS.tpath)
    for fileName in ALL_JS_FILES:
        handleFile(fileName)
    print "Done!"