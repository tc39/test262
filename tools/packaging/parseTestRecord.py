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

import yaml

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

yamlPattern = re.compile(r"---((?:\s|\S)*)---")
newlinePattern = re.compile(r"\n")

def stripStars(text):
    return stars.sub('\n', text).strip()

def stripHeader(src):
    header = headerPattern.match(src).group(0)
    return src[len(header):]

def matchParts(src, name):
    match = testRecordPattern.match(src)
    if match == None:
        raise Exception('unrecognized: ' + name)
    return match

def hasYAML(text):
    match = yamlPattern.match(text)
    if match == None:
        return False
    return True

def oldAttrParser(testRecord, body, name):
    propTexts = atattrs.split(body)
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

def yamlAttrParser(testRecord, attrs, name):
    match = yamlPattern.match(attrs)
    body = match.group(1)
    parsed = yaml.load(body)

    for key in parsed:
        value = parsed[key]
        if key == "info":
            key = "commentary"
        testRecord[key] = value

    for flag in testRecord['flags']:
        testRecord[flag] = ""

def parseTestRecord(src, name):
    testRecord = {}
    match = matchParts(src, name)
    testRecord['header'] = match.group(1).strip()
    testRecord['test'] = match.group(3) # do not trim

    attrs = match.group(2)
    if attrs:
        if hasYAML(attrs):
            yamlAttrParser(testRecord, attrs, name)
        else:
            oldAttrParser(testRecord, attrs, name)

    return testRecord
