// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-177
description: >
    Object.create - one property in 'Properties' is the global object
    that uses Object's [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        try {
            fnGlobalObject().value = "GlobalValue";

            var newObj = Object.create({}, {
                prop: fnGlobalObject()
            });

            return newObj.prop === "GlobalValue";
        } finally {
            delete fnGlobalObject().value;
        }
    }
runTestCase(testcase);
