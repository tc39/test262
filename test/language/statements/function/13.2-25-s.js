// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-25-s
description: >
    StrictMode - reading a property named 'arguments' of function
    objects is not allowed outside the function
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        function foo () {"use strict";}
        try {
            var temp = foo.arguments;
            return false;
        }
        catch (e) {
            return e instanceof TypeError;
        }
}
runTestCase(testcase);
