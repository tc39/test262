// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-248
description: >
    Object.getOwnPropertyDescriptor - returned object contains the
    property 'value' if the value of property 'value' is not
    explicitly specified when defined by Object.defineProperty
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "property", {
            writable: true,
            configurable: true
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

        return "value" in desc;
    }
runTestCase(testcase);
