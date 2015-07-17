// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-604
description: ES5 Attributes - all attributes in Object.seal are correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, "seal");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Object.seal;

        try {
            Object.seal = "2010";

            var isWritable = (Object.seal === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "seal") {
                    isEnumerable = true;
                }
            }
        
            delete Object.seal;

            var isConfigurable = !Object.hasOwnProperty("seal");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, "seal", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
