// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-623
description: >
    ES5 Attributes - all attributes in Date.prototype.toISOString are
    correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Date.prototype, "toISOString");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Date.prototype.toISOString;

        try {
            Date.prototype.toISOString = "2010";

            var isWritable = (Date.prototype.toISOString === "2010");

            var isEnumerable = false;

            for (var prop in Date.prototype) {
                if (prop === "toISOString") {
                    isEnumerable = true;
                }
            }

            delete Date.prototype.toISOString;

            var isConfigurable = !Date.prototype.hasOwnProperty("toISOString");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Date.prototype, "toISOString", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
