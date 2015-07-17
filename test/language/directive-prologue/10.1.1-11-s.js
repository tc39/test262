// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-11-s
description: >
    Strict Mode - Eval code is strict code with a Use Strict Directive
    at the beginning of the block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("'use strict'; var public = 1; var anotherVariableNotReserveWord = 2;");

            return false;
        } catch (e) {
            return e instanceof SyntaxError && typeof public === "undefined" &&
                typeof anotherVariableNotReserveWord === "undefined";
        }
    }
runTestCase(testcase);
