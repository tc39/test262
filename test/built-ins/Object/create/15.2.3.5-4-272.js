// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-272
description: >
    Object.create - 'set' property of one property in 'Properties' is
    own accessor property (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var data = "data";
        var descObj = {};

        Object.defineProperty(descObj, "set", {
            get: function () {
                return function (value) {
                    data = value;
                };
            }
        });

        var newObj = Object.create({}, {
            prop: descObj 
        });

        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = "overrideData";

        return hasProperty && data === "overrideData";
    }
runTestCase(testcase);
