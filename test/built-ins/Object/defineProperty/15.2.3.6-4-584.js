// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-584
description: ES5 Attributes - Failed to add property into object (Date instance)
includes: [runTestCase.js]
---*/

function testcase() {
        var data = "data";
        try {
            Object.defineProperty(Date.prototype, "prop", {
                get: function () {
                    return data;
                },
                set: function (value) {
                    data = value;
                },
                enumerable: true,
                configurable: true
            });
            var dateObj = new Date();
            dateObj.prop = "myOwnProperty";

            return !dateObj.hasOwnProperty("prop") && dateObj.prop === "myOwnProperty" && data === "myOwnProperty";
        } finally {
            delete Date.prototype.prop;
        }
    }
runTestCase(testcase);
