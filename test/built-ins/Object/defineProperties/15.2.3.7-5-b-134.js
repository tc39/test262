// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-134
description: >
    Object.defineProperties - 'descObj' is an Error object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var descObj = new Error();

        descObj.value = "Error";

        Object.defineProperties(obj, {
            property: descObj
        });

        return obj.property === "Error";
    }
runTestCase(testcase);
