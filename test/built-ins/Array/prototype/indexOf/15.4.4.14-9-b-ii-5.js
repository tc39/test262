// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-ii-5
description: Array.prototype.indexOf - search element is -NaN
includes: [runTestCase.js]
---*/

function testcase() {

        return [+NaN, NaN, -NaN].indexOf(-NaN) === -1;
    }
runTestCase(testcase);
