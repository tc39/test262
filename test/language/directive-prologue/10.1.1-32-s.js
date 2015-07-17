// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-32-s
description: >
    Strict Mode - Function code of built-in Function constructor
    contains Use Strict Directive which appears at the end of the block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var funObj = new Function("a", "eval('public = 1;'); anotherVariable = 2; 'use strict';");
        funObj();
        return public === 1 && anotherVariable === 2;
    }
runTestCase(testcase);
