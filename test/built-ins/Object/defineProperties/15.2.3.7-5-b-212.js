// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-212
description: >
    Object.defineProperties - 'descObj' is the JSON object which
    implements its own [[Get]] method to get 'get' property (8.10.5
    step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        try {
            JSON.get = function () {
                return "JSON";
            };

            Object.defineProperties(obj, {
                property: JSON
            });

            return obj.property === "JSON";
        } finally {
            delete JSON.get;
        }
    }
runTestCase(testcase);
