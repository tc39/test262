// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.3-3-s
description: >
    Strict Mode - 'this' value is a boolean which cannot be converted
    to wrapper objects when the function is called with an array of
    arguments
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        function fun() {
            return (this instanceof Boolean);
        }
        return !fun.apply(false, Array);
    }
runTestCase(testcase);
