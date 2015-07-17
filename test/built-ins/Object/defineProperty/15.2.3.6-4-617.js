// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-617
description: ES5 Attributes - all attributes in Array.prototype.map are correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Array.prototype, "map");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Array.prototype.map;

        try {
            Array.prototype.map = "2010";

            var isWritable = (Array.prototype.map === "2010");

            var isEnumerable = false;

            for (var prop in Array.prototype) {
                if (prop === "map") {
                    isEnumerable = true;
                }
            }

            delete Array.prototype.map;

            var isConfigurable = !Array.prototype.hasOwnProperty("map");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Array.prototype, "map", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
