// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-36
description: >
    Object.defineProperty - 'O' is a Boolean object that uses Object's
    [[GetOwnProperty]] method to access the 'name' property (8.12.9
    step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = new Boolean(true);

        Object.defineProperty(obj, "foo", {
            value: 12,
            configurable: false
        });

        try {
            Object.defineProperty(obj, "foo", {
                value: 11,
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && obj.foo === 12;
        }
    }
runTestCase(testcase);
