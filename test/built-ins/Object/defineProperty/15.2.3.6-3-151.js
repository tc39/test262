// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-151
description: >
    Object.defineProperty - 'Attributes' is the global object that
    uses Object's [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
        var obj = {};

        try {
            fnGlobalObject().value = "global";

            Object.defineProperty(obj, "property", fnGlobalObject());

            return obj.property === "global";
        } finally {
            delete fnGlobalObject().value;
        }
    }
runTestCase(testcase);
