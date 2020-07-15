#!/usr/bin/env python

# Copyright 2011 by Google, Inc.  All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

from __future__ import print_function

import os
import re
import imp

# Matches trailing whitespace and any following blank lines.
_BLANK_LINES = r"([ \t]*[\r\n]{1,2})*"

# Matches the YAML frontmatter block.
_YAML_PATTERN = re.compile(r"/\*---(.*)---\*/" + _BLANK_LINES, re.DOTALL)

# Matches all known variants for the license block.
_LICENSE_PATTERN = re.compile(
   r'// Copyright( \([C]\))? (\w+) .+\. {1,2}All rights reserved\.[\r\n]{1,2}' +
   r'(' +
       r'// This code is governed by the( BSD)? license found in the LICENSE file\.' +
       r'|' +
       r'// See LICENSE for details\.' +
       r'|' +
       r'// Use of this source code is governed by a BSD-style license that can be[\r\n]{1,2}' +
       r'// found in the LICENSE file\.' +
       r'|' +
       r'// See LICENSE or https://github\.com/tc39/test262/blob/HEAD/LICENSE' +
   r')[\r\n]{1,2}' + _BLANK_LINES, re.IGNORECASE)

yamlLoad = None

def yamlAttrParser(testRecord, attrs, name, onerror):
    importYamlLoad()

    parsed = yamlLoad(attrs)
    if parsed is None:
        onerror("Failed to parse yaml in name %s" % name)
        return

    for key in parsed:
        value = parsed[key]
        if key == "info":
            key = "commentary"
        testRecord[key] = value

    if 'flags' in testRecord:
        for flag in testRecord['flags']:
            testRecord[flag] = ""

def findLicense(src):
    match = _LICENSE_PATTERN.search(src)
    if not match:
        return None

    return match.group(0)

def findAttrs(src):
    match = _YAML_PATTERN.search(src)
    if not match:
        return (None, None)

    return (match.group(0), match.group(1).strip())

def parseTestRecord(src, name, onerror = print):
    # Find the license block.
    header = findLicense(src)

    # Find the YAML frontmatter.
    (frontmatter, attrs) = findAttrs(src)

    # YAML frontmatter is required for all tests.
    if frontmatter is None:
        onerror("Missing frontmatter: %s" % name)

    # The license should be placed before the frontmatter and there shouldn't be
    # be any extra content between the license and the frontmatter.
    if header is not None and frontmatter is not None:
        headerIdx = src.index(header)
        frontmatterIdx = src.index(frontmatter)
        if headerIdx > frontmatterIdx:
            onerror("Unexpected license after frontmatter: %s" % name)

        # Search for any extra test content, but ignore whitespace only or comment lines.
        extra = src[headerIdx + len(header) : frontmatterIdx]
        if extra and any(line.strip() and not line.lstrip().startswith("//") for line in extra.split("\n")):
            onerror("Unexpected test content between license and frontmatter: %s" % name)

    # Remove the license and YAML parts from the actual test content.
    test = src
    if frontmatter is not None:
        test = test.replace(frontmatter, '')
    if header is not None:
        test = test.replace(header, '')

    testRecord = {}
    testRecord['header'] = header.strip() if header else ''
    testRecord['test'] = test

    if attrs:
        yamlAttrParser(testRecord, attrs, name, onerror)

    # Report if the license block is missing in non-generated tests.
    if header is None and "generated" not in testRecord:
        onerror("No license found in: %s" % name)

    return testRecord

def importYamlLoad():
    global yamlLoad
    if yamlLoad:
        return
    monkeyYaml = loadMonkeyYaml()
    yamlLoad = monkeyYaml.load

def loadMonkeyYaml():
    f = None
    try:
        p = os.path.dirname(os.path.realpath(__file__))
        (f, pathname, description) = imp.find_module("monkeyYaml", [p])
        module = imp.load_module("monkeyYaml", f, pathname, description)
        return module
    except:
        raise ImportError("Cannot load monkeyYaml")
    finally:
        if f:
            f.close()
