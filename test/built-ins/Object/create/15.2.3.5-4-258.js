// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-258
description: >
    Object.create - 'get' property of one property in 'Properties' is
    the primitive value null (8.10.5 step 7.b)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.create({}, {
                prop: {
                    get: null
                }
            });

            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
