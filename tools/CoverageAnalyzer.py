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


#--IMPORTS---------------------------------------------------------------------
import os
import sys

#--GLOBALS---------------------------------------------------------------------
CVG_DICT = {}

#--HELPERS---------------------------------------------------------------------
def getCoverageData(directory):
  tempList = os.listdir(directory)
  #Build up a list of directories under directory
  dirList = [x for x in tempList if os.path.isdir(os.path.join(directory, x))]
  #Build up a list of JavaScript files under the current directory
  jsList = [x for xin in tempList if x.endswith(".js")]
  
  #If the directory contains JavaScript files we'll assume they're all test 
  #cases
  if len(jsList)!=0:
    CVG_DICT[os.path.split(directory)[1]] = len(jsList)
  
  #This might have just been a directory containing other dirs. Call ourself on 
  #it as well
  for x in dirList:
    getCoverageData(os.path.join(directory, x))


def emitCoverageData(cvgDict):
  totalTests = 0
  totalSections = 0
  keyList = cvgDict.keys()
  keyList.sort(chapterCompare)
  for cvgKey in keyList:
    print cvgKey, ",", cvgDict[cvgKey]
    totalSections+=1
    totalTests+=cvgDict[cvgKey]
  print
  print "Total number of tests is:", totalTests, "."
  print "These tests cover", totalSections, "ECMAScript 5 sections."


def chapterCompare(x, y):
  if ("." in x) and ("." in y):
    try:
      x1 = int(x[0:x.index(".")])
      y1 = int(y[0:y.index(".")])
      if x1==y1:
        return chapterCompare(x[x.index(".")+1:], y[y.index(".")+1:])
      return cmp(x1, y1)
    except ValueError:
      pass
  return cmp(x, y)

#--MAIN------------------------------------------------------------------------
startDir = sys.argv[1]
getCoverageData(startDir)
print "Emitting ECMAScript 5 coverage data for", startDir, "..."
emitCoverageData(CVG_DICT)