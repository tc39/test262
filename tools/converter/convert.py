#!/usr/bin/env python

# Copyright 2011 by Google, Inc.  All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

# Follows convert.js as closely as possible. So to minimize
# divergence, see convert.js for doc-comments that are missing here.


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

headerPattern = r"(?:(?:\/\/.*)?\s*\n)*"
captureCommentPattern = r"\/\*\*?((?:\s|\S)*?)\*\/\s*\n"
anyPattern = r"(?:\s|\S)*"
blanksPattern = r"(?:\s|\n)*"

# only until we've done our last conversion from current sputnik
# format to canonical test262 format
captureStrictPattern = r"\s*('use strict'|\"use strict\");"

# Should match anything
testEnvelopePattern = r"^(" + headerPattern +
                      r")(?:" + captureCommentPattern +
                      r")?(?:" + captureStrictPattern +
                      r")?(" + anyPattern +
                      r")$"

registerPattern = r"^(" + anyPattern + r"?)(" +
                  r"ES5Harness\.registerTest\s*\(\s*\{" + anyPattern +
                  r"\}\s*\)" + r")" +
                  r"\s*;?(?:\s|\n)*$"

Matches a named function. Captures both the name and the body.
captureFuncNameBodyPattern = r"^function\s+(\w*)\(\s*\)\s*\{" +
                             r"(" + anyPattern + r")" +
                             r";?" + blanksPattern +
                             r"\}$"

# captureExprBodyPattern = r"^return\s+" +
#                          r"(" + anyPattern + r"?)" +
#                          r";$"

# capturePredicatePattern = r"^if\s+\((.*?)\)\s*\{" + blanksPattern +
#                           r"return\s+true;?" + blanksPattern +
#                           r"\}$"

stars = r"\s*\n\s*\*\s?"

atattrs = r"\s*\n\s*\*\s*@"


def stripStars(text):
    return re.sub(stars, '\n', text).strip()


def parseTestEnvelope(src, name):
    envelope = { 'testRecord': {} }
    envelopeMatch = re.match(testEnvelopePattern, src)
    if (envelopeMatch == None):
        raise Exception('unrecognized: ' + name)
    envelope['header'] = envelopeMatch.group(1).strip()
    if (envelopeMatch.group(2)):
        propTexts = re.split(atattrs, envelopeMatch.group(2))
        envelope['commentary'] = stripStars(propTexts[0])
        del propTexts[0]
        for propText in propTexts:
            # TODO: error check for mismatch
            propName = re.match(r"^\w+", propText).group(0)
            propVal = propText[len(propName):]

            # Just till last one-time conversion
            # strip optional initial colon or final semicolon.
            # The initial colon is only stripped if it comes immediately
            # after the identifier with no intervening whitespace.
            propVal = re.sub(r"^:\s*", '', propVal, 1)
            propVal = re.sub(r";\s*$", '', propVal, 1)
            propVal = stripStars(propVal)
            
            if (propName in envelope['testRecord']):
                raise Exception('duplicate: ' + propName)
            envelope['testRecord'][propName] = propVal;
    if (envelopeMatch.group(3)):
        envelope['testRecord']['strict_only'] = '';
    envelope['rest'] = envelopeMatch.group(4) # do not trim

    # Just till last one time conversion
    registerMatch = re.match(registerPattern, envelope['rest'])
    if (registerMatch):
        envelope['rest'] = registerMatch.group(1).strip()
        envelope['registerExpr'] = registerMatch.group(2).strip()
    else if ('ES5Harness.registerTest' in envelope['rest']):
        raise Exception('Malformed harness? ' + name)
    return envelope


def functionSrcToProgramSrc(funcSrc):
    cfnbMatch = re.match(captureFuncNameBodyPattern, funcSrc)
    if (not cfnbMatch):
        raise Exception('Could not recognize: "' + funcSrc + '"')
    name = cfnbMatch.group(1).strip()
    body = cfnbMatch.group(2).strip()

    # Look for special cases

    cebMatch = re.match(captureExprBodyPattern, body)
    if (cebMatch):
        return 'assertTruthy(' + cebMatch.group(1).strip() + ');'

    cpMatch = re.match(capturePredicatePattern, body)
    if (cpMatch):
        return 'assertTruthy(' + cpMatch.group(1).strip() + ');'

    # General case

    return (funcSrc + '\n' +
            'runTestCase(' + name + ');')


def gatherOne(envelope, name):
    # TODO(erights): implement by pattern match rather than evaluation
    raise Exception('gatherOne not implemented yet')


def transferProp(record, fromName, toName):
    if    (((toName not in testRecord) or
            (testRecord[toName] == '')) and
           (fromName in testRecord)):
        testRecord[toName] = testRecord[fromName]
        del testRecord[fromName]


# TODO: new midcap names
# don't mask collisions -- give errors
# if unrecognized names remain, give errors
def normalizeProps(testRecord):
    if    (('strict_only' not in testRecord) and 
           ('strict' in testRecord) and
           (testRecord['strict'] == 1)):
        testRecord['strict_only'] = ''

    if (testRecord['strict'] == 1):
        del testRecord['strict']

    if ('strict_mode_negative' in testRecord):
        if ('strict_only' not in testRecord):
            testRecord['strict_only'] = ''
        transferProp(testRecord, 'strict_mode_negative', 'negative')

     transferProp(testRecord, 'errortype', 'negative')
     transferProp(testRecord, 'assertion', 'description')
     transferProp(testRecord, 'assertion', 'commentary')


def getGlobalScopeRecord(relPath):
    # TODO(erights): implement
    raise Exception('getGlobalScopeRecord not implemented yet')
    
    
def parseTestRecord(inBase, relPath, name):
    nextRelPath = relPath + [name]
    nextPath = inBase + [name]
    
    
