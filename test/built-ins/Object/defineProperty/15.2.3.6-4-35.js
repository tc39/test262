// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-35
description: >
    Object.defineProperty - 'O' is a String object which implements
    its own [[GetOwnProperty]] method to access the 'name' property
    (8.12.9 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var str = new String("abc");

        Object.defineProperty(str, "foo", {
            value: 12,
            configurable: false
        });

        try {
            Object.defineProperty(str, "foo", {
                value: 11,
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && str.foo === 12;
        }
    }
runTestCase(testcase);
