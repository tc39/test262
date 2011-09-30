#!/usr/bin/env python

# Copyright 2011 by Google, Inc.  All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

# TODO: resolve differences with common.py and unify into one file.


import logging
import optparse
import os
from os import path
import platform
import re
import subprocess
import sys
import tempfile
import time

# from TestCasePackagerConfig import *

headerPatternStr = r"(?:(?:\s*\/\/.*)?\s*\n)*"
captureCommentPatternStr = r"\/\*\*?((?:\s|\S)*?)\*\/\s*\n"
anyPatternStr = r"(?:\s|\S)*"

headerPattern = re.compile("^" + headerPatternStr)

# Should match anything
testRecordPattern = re.compile(r"^(" + headerPatternStr +
                               r")(?:" + captureCommentPatternStr +
                               r")?(" + anyPatternStr +
                               r")$")

stars = re.compile(r"\s*\n\s*\*\s?")
atattrs = re.compile(r"\s*\n\s*\*\s*@")

def stripStars(text):
    return stars.sub('\n', text).strip()

def stripHeader(src):
    header = headerPattern.match(src).group(0)
    return src[len(header):]

def parseTestRecord(src, name):
    testRecord = {}
    match = testRecordPattern.match(src)
    if match == None:
        raise Exception('unrecognized: ' + name)
    testRecord['header'] = match.group(1).strip()
    testRecord['test'] = match.group(3) # do not trim
    if match.group(2):
        propTexts = atattrs.split(match.group(2))
        testRecord['commentary'] = stripStars(propTexts[0])
        del propTexts[0]
        for propText in propTexts:
            propMatch = re.match(r"^\w+", propText)
            if propMatch == None:
                raise Exception('Malformed "@" attribute: ' + name)
            propName = propMatch.group(0)
            propVal = stripStars(propText[len(propName):])
            
            if propName in testRecord:
                raise Exception('duplicate: ' + propName)
            testRecord[propName] = propVal;
    return testRecord
