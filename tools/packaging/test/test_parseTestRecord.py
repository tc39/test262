#!/usr/bin/env python

# Copyright 2014 by Sam Mikes.  All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

from __future__ import print_function

import unittest

import os
import yaml
from textwrap import dedent

# Temporarily add parent dir to search path to be able to load "parseTestRecord".
try:
    import sys
    sys.path.insert(0, "..")

    from parseTestRecord import *
finally:
    del sys.path[0]

def slurpFile(name):
    with open(name) as f:
        contents = f.read()
    return contents

def dedent_strip(content):
    return dedent(content).strip("\n")

def dedent_lstrip(content):
    return dedent(content).lstrip("\n")

def raiseExceptionOnError(message):
    raise Exception(message)

class TestYAMLParsing(unittest.TestCase):
    def test_findAttrs(self):
        name = 'fixtures/test262-yaml-headers.js'
        contents = slurpFile(name)
        (frontmatter, attrs) = findAttrs(contents)

        self.assertIsNotNone(frontmatter)
        self.assertIsNotNone(attrs)
        self.assertEqual(dedent_strip(
            """
            info: >
                The production Block { } in strict code can't contain function
                declaration;
            description: Trying to declare function at the Block statement
            negative: SyntaxError
            bestPractice: "http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"
            flags: [onlyStrict]
            """),
            attrs)

    def test_yamlParse(self):
        name = 'fixtures/test262-yaml-headers.js'
        contents = slurpFile(name)
        (_, text) = findAttrs(contents)
        parsed = yaml.load(text)

        self.assertEqual("Trying to declare function at the Block statement",
                         parsed['description'])
        self.assertEqual("SyntaxError", parsed['negative'])
        self.assertEqual('http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls', parsed['bestPractice'])
        self.assertEqual(["onlyStrict"], parsed['flags'])
        self.assertEqual("The production Block { } in strict code can't contain function declaration;\n", parsed['info'])

    def test_missingKeys(self):
        result = {}
        yamlAttrParser(
            result,
            dedent_strip(
                """
                    info: some info (note no flags or includes)
                """
            ),
            "",
            raiseExceptionOnError
        )
        self.assertEqual("some info (note no flags or includes)", result['commentary'])

    def test_overview(self):
        name = 'fixtures/test262-yaml-headers.js'
        contents = slurpFile(name)
        record = parseTestRecord(contents, name, raiseExceptionOnError)

        self.assertEqual(dedent_strip(
            """
            // Copyright 2009 the Sputnik authors.  All rights reserved.
            // This code is governed by the BSD license found in the LICENSE file.
            """),
            record['header'])
        self.assertEqual("The production Block { } in strict code can't contain function declaration;\n", record['commentary'])

        self.assertEqual("Trying to declare function at the Block statement",
                         record['description'])
        self.assertEqual(['onlyStrict'], record['flags'])
        self.assertEqual("", record['onlyStrict'])
        self.assertEqual("SyntaxError", record['negative'])
        self.assertEqual('"http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"',
                         record['bestPractice'])

        self.assertEqual(dedent_lstrip(
            """
            "use strict";
            {
                function __func(){}
            }

            """),
            record['test'])

    def test_overview_no_copyright(self):
        name = 'fixtures/test262-yaml-headers-no-cr.js'
        contents = slurpFile(name)
        record = parseTestRecord(contents, name, print)

        self.assertEqual('',
                         record['header'])
        self.assertEqual("The production Block { } in strict code can't contain function declaration;\n", record['commentary'])

        self.assertEqual("Trying to declare function at the Block statement",
                         record['description'])
        self.assertEqual(['onlyStrict'], record['flags'])
        self.assertEqual("", record['onlyStrict'])
        self.assertEqual("SyntaxError", record['negative'])
        self.assertEqual('"http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"',
                         record['bestPractice'])

        self.assertEqual(dedent_lstrip(
            """
            "use strict";
            {
                function __func(){}
            }

            """),
            record['test'])


if __name__ == '__main__':
    unittest.main()
