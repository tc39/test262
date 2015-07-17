// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-116
description: >
    Object.defineProperty - 'O' is an Array, test the length property
    of 'O' is own data property (15.4.5.1 step 1)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [0, 1];
        Object.defineProperty(arrObj, "1", {
            value: 1,
            configurable: false
        });
        try {
            Object.defineProperty(arrObj, "length", { value: 1 });
            return false;
        } catch (e) {
            var desc = Object.getOwnPropertyDescriptor(arrObj, "length");

            return Object.hasOwnProperty.call(arrObj, "length") && desc.value === 2 &&
                desc.writable === true && desc.configurable === false && desc.enumerable === false;
        }
    }
runTestCase(testcase);
