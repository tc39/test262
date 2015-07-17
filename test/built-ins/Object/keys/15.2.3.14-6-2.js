// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-6-2
description: >
    Object.keys - the order of elements in returned array is the same
    with the order of properties in 'O' (sparse array)
includes: [runTestCase.js]
---*/

function testcase() {
        var sparseArray = [1, 2, , 4, , 6];

        var tempArray = [];
        for (var p in sparseArray) {
            if (sparseArray.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }

        var returnedArray = Object.keys(sparseArray);

        for (var index in returnedArray) {
            if (tempArray[index] !== returnedArray[index]) {
                return false;
            }
        }
        return true;
    }
runTestCase(testcase);
