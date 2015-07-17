// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.14.1-4-s
description: >
    Strict Mode - SyntaxError isn't thrown if a TryStatement with a
    Catch occurs within strict code and the Identifier of the Catch
    production is EVAL
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            throw new Error("...");
            return false;
        } catch (EVAL) {
            return EVAL instanceof Error;
        }
    }
runTestCase(testcase);
