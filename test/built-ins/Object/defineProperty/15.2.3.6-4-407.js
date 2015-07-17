// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-407
description: >
    ES5 Attributes - [[Value]] attribute of inherited property of
    [[Prototype]] internal property is correct (Error Instance)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(Error.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var errObj = new Error();

            return !errObj.hasOwnProperty("prop") && errObj.prop === 1001;
        } finally {
            delete Error.prototype.prop;
        }
    }
runTestCase(testcase);
