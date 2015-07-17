// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-114
description: >
    Object.defineProperties - 'value' property of 'descObj' is own
    data property (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperties(obj, {
            property: {
                value: "ownDataProperty"
            }
        });

        return obj.property === "ownDataProperty";
    }
runTestCase(testcase);
