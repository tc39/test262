// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-33
description: >
    Object.defineProperty - 'O' is a Function object that uses
    Object's [[GetOwnProperty]] method to access the 'name' property
    (8.12.9 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var fun = function () { };

        Object.defineProperty(fun, "foo", {
            value: 12,
            configurable: false
        });

        try {
            Object.defineProperty(fun, "foo", {
                value: 11,
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && fun.foo === 12;
        }
    }
runTestCase(testcase);
