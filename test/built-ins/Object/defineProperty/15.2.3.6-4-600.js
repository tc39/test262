// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-600
description: >
    ES5 Attributes - all attributes in Object.getOwnPropertyNames are
    correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, "getOwnPropertyNames");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Object.getOwnPropertyNames;

        try {
            Object.getOwnPropertyNames = "2010";

            var isWritable = (Object.getOwnPropertyNames === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "getOwnPropertyNames") {
                    isEnumerable = true;
                }
            }
        
            delete Object.getOwnPropertyNames;

            var isConfigurable = !Object.hasOwnProperty("getOwnPropertyNames");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, "getOwnPropertyNames", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
