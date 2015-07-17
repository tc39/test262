// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-3-9
description: >
    Object.getOwnPropertyDescriptor - 'P' is own accessor property
    without a get function
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var fun = function () { };
        Object.defineProperty(obj, "property", {
            set: fun,
            configurable: true
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

        return desc.set === fun;
    }
runTestCase(testcase);
