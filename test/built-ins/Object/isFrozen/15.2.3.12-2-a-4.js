// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-a-4
description: Object.isFrozen - 'P' is own accessor property
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        Object.defineProperty(obj, "foo", {
            get: function () {
                return 9;
            },
            configurable: true
        });

        Object.preventExtensions(obj);
        return !Object.isFrozen(obj);
    }
runTestCase(testcase);
