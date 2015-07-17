// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-12-s
description: >
    Strict Mode - Eval code is strict eval code with a Use Strict
    Directive in the middle of the block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        eval("var public = 1; 'use strict'; var anotherVariableNotReserveWord = 2;");
        return public === 1 && anotherVariableNotReserveWord === 2;
    }
runTestCase(testcase);
