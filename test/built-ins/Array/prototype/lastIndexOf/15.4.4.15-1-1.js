// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-1
description: Array.prototype.lastIndexOf applied to undefined throws a TypeError
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Array.prototype.lastIndexOf.call(undefined);
            return false;
        } catch (e) {
            if (e instanceof TypeError) {
                return true;
            }
        }
    }
runTestCase(testcase);
