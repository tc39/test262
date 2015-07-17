// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-79
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    own accessor property (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var attr = {};
        Object.defineProperty(attr, "configurable", {
            get: function () {
                return true;
            }
        });

        Object.defineProperty(obj, "property", attr);

        var beforeDeleted = obj.hasOwnProperty("property");

        delete obj.property;

        var afterDeleted = obj.hasOwnProperty("property");

        return beforeDeleted === true && afterDeleted === false;
    }
runTestCase(testcase);
