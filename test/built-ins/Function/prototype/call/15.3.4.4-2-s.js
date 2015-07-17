// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.4-2-s
description: >
    Strict Mode - 'this' value is a number which cannot be converted
    to wrapper objects  when the function is called without an array
    argument
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        function fun() {
            return (this instanceof Number);
        }
        return !fun.call(-12);
    }
runTestCase(testcase);
