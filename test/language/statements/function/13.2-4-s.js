// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-4-s
description: >
    StrictMode - A TypeError is thrown when a code in strict mode
    tries to write to 'arguments' of function instances.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            var foo = function () {
            }
            foo.arguments = 20;
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
