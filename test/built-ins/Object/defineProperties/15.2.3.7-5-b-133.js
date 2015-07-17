// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-133
description: >
    Object.defineProperties - 'descObj' is the JSON object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        try {
            JSON.value = "JSON";

            Object.defineProperties(obj, {
                property: JSON
            });

            return obj.property === "JSON";
        } finally {
            delete JSON.value;
        }
    }
runTestCase(testcase);
