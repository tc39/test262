// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-409
description: >
    ES5 Attributes - Inherited property whose [[Enumerable]] attribute
    is set to false is enumerable (RegExp instance)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(RegExp.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var regObj = new RegExp();

            var verifyEnumerable = false;
            for (var p in regObj) {
                if (p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !regObj.hasOwnProperty("prop") && verifyEnumerable;
        } finally {
            delete RegExp.prototype.prop;
        }
    }
runTestCase(testcase);
