// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-296
description: >
    Object.create - 'set' property of one property in 'Properties' is
    a primitive string value (8.10.5 step 8.b)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.create({}, {
                prop: {
                    set: "abc"
                }
            });

            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
