// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-211
description: >
    Object.defineProperty - 'get' property in 'Attributes' is own
    accessor property (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var attributes = {};
        Object.defineProperty(attributes, "get", {
            get: function () {
                return function () {
                    return "ownAccessorProperty";
                };
            }
        });

        Object.defineProperty(obj, "property", attributes);

        return obj.property === "ownAccessorProperty";
    }
runTestCase(testcase);
