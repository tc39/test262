// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-240
description: >
    Object.getOwnPropertyDescriptor - ensure that 'get' property of
    returned object is data property with correct 'writable' attribute
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var fun = function () {
            return "ownGetProperty";
        };
        Object.defineProperty(obj, "property", {
            get: fun,
            configurable: true
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

        try {
            desc.get = "overwriteGetProperty";
            return desc.get === "overwriteGetProperty";
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
