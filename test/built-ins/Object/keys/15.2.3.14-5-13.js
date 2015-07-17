// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-13
description: >
    Object.keys - own enumerable indexed data property of sparse array
    'O' is defined in returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = [1, , 3, , 5];

        Object.defineProperty(obj, 5, {
            value: 7,
            enumerable: false,
            configurable: true
        });

        Object.defineProperty(obj, 10000, {
            value: "ElementWithLargeIndex",
            enumerable: true,
            configurable: true
        });

        var arr = Object.keys(obj);

        var index;
        var initValue = 0;
        for (index = 0; index < 3; index++) {
            if (arr[index] !== initValue.toString()) {
                return false;
            }
            initValue += 2;
        }

        if (arr.length !== 4 || arr[3] !== "10000") {
            return false;
        }

        return true;
    }
runTestCase(testcase);
