// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-579
description: >
    ES5 Attributes - Success to add property into object (Array
    instance)
includes: [runTestCase.js]
---*/

function testcase() {
        var data = "data";
        try {
            Object.defineProperty(Array.prototype, "prop", {
                get: function () {
                    return data;
                },
                set: function (value) {
                    data = value;
                },
                enumerable: true,
                configurable: true
            });
            var arrObj = [];
            arrObj.prop = "myOwnProperty";

            return !arrObj.hasOwnProperty("prop") && arrObj.prop === "myOwnProperty" && data === "myOwnProperty";
        } finally {
            delete Array.prototype.prop;
        }
    }
runTestCase(testcase);
