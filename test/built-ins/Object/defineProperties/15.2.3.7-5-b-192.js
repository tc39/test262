// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-192
description: >
    Object.defineProperties - 'get' property of 'descObj' is not
    present (8.10.5 step 7)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var setter = function () { };

        Object.defineProperties(obj, {
            property: {
                set: setter
            }
        });

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
