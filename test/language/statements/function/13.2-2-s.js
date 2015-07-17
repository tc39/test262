// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-2-s
description: >
    StrictMode - A TypeError is thrown when a strict mode code writes
    to properties named 'caller' of function instances.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            var foo = function () {
            }
            foo.caller = 20;
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
