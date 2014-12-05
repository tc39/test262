// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-166
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Configurable]] attribute of
    own data property with large index named in 'O' can stop deleting
    index named properties (15.4.5.1 step 3.l.ii)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1];

        try {
            Object.defineProperty(arr, "1", {
                configurable: false
            });

            Object.defineProperties(arr, {
                length: {
                    value: 1
                }
            });

            return false;
        } catch (e) {
            return (e instanceof TypeError) && arr.length === 2 &&
                arr.hasOwnProperty("1") && arr[0] === 0 && arr[1] === 1;
        }
    }
runTestCase(testcase);
