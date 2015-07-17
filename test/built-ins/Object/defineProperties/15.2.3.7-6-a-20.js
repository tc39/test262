// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-20
description: >
    Object.defineProperties - 'O' is a JSON object which implements
    its own [[GetOwnProperty]] method to get 'P' (8.12.9 step 1 )
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.defineProperty(JSON, "prop", {
                value: 11,
                writable: true,
                configurable: true
            });
            var hasProperty = JSON.hasOwnProperty("prop") && JSON.prop === 11;
            Object.defineProperties(JSON, {
                prop: {
                    value: 12
                }
            });
            return hasProperty && JSON.prop === 12;
        } finally {
            delete JSON.prop;
        }
    }
runTestCase(testcase);
