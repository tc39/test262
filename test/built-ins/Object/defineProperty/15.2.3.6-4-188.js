// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-188
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, test TypeError is thrown if the [[Writable]]
    attribute of the length property in 'O' is false and value of
    'name' equals to value of the length property (15.4.5.1 step 4.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [1, 2, 3];

        Object.defineProperty(arrObj, "length", {
            writable: false
        });

        try {
            Object.defineProperty(arrObj, 3, {
                value: "abc"
            });

            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
