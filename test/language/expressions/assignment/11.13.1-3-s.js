// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.1-3-s
description: >
    Strict Mode - TypeError is thrown if The LeftHandSide is a
    reference to a non-existent property of an object whose
    [[Extensible]] internal property has the value false under strict
    mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.preventExtensions(obj);

        try {
            obj.len = 10;
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
