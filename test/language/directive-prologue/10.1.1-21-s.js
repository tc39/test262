// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-21-s
description: >
    Strict Mode - Function code of a FunctionDeclaration contains Use
    Strict Directive which appears at the end of the block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        function fun() {
            eval("var public = 1;");
            return public === 1;
            "use strict";
        }
        return fun();
    }
runTestCase(testcase);
