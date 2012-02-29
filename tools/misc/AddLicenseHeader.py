# Copyright (c) 2012 Ecma International.  All rights reserved. 
# Ecma International makes this code available under the terms and conditions set
# forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
# "Use Terms").   Any redistribution of this code must retain the above 
# copyright and this notice and otherwise comply with the Use Terms.

#--Imports---------------------------------------------------------------------
import argparse
import os
import sys
import re

#--Globals---------------------------------------------------------------------
MSFT_LICENSE = '''/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
'''

GOOGLE_LICENSE = '''// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
'''

GOOGLE_RE = re.compile(r"[\\/]S([0-9]+)|(bp)(\.|_)[^\\/]+\.js$")
GOOGLE_LINE_ONE  = re.compile(r"(Copyright\s+20[0-9][0-9]\s+Google)|(the Sputnik authors)")

IETC_RE    = re.compile(r"[\\/][0-9]+\.[^\\/]+\.js$")
IETC_LINE_ONE = re.compile(r"Microsoft Corporation")



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
    '''
    '''
    with open(filePath, "rb") as f:
        origLines = f.readlines()
    
    #Figure out which license header we'll be using
    if GOOGLE_RE.search(filePath)!=None:
        licenseHeader = GOOGLE_LICENSE
        lineOne = GOOGLE_LINE_ONE
    elif IETC_RE.search(filePath)!=None:
        licenseHeader = MSFT_LICENSE
        lineOne = IETC_LINE_ONE
    else:
        print "*!!!*:\t", filePath
        return
    
    #See if it's already there
    if lineOne.search(origLines[0])!=None:
        return
    
    with open(filePath, "wb") as f:
        print "MODIFIED:\t", filePath
        f.write(licenseHeader)
        
        for line in origLines:
            f.write(line)

#--Main------------------------------------------------------------------------
if __name__=="__main__":
    __parser = argparse.ArgumentParser(description='Tool used to fix test file license headers')
    __parser.add_argument('tpath', action='store',
                          help='Full path to test cases. E.g., C:\repos\test262-msft\test\suite')
    ARGS = __parser.parse_args()
    if not os.path.exists(ARGS.tpath):
        print "Cannot fix tests in '%s' when it doesn't exist!" % ARGS.tpath
        sys.exit(1)
    
    ALL_JS_FILES = getAllJSFiles(ARGS.tpath)
    for fileName in ALL_JS_FILES:
        handleFile(fileName)
    print "Done!"