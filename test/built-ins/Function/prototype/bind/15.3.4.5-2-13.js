// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-2-13
description: Function.prototype.bind throws TypeError if 'Target' is a number
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Function.prototype.bind.call(5);
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
