// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-8-2
description: >
    Array.prototype.indexOf returns correct index when 'fromIndex' is
    -1
includes: [runTestCase.js]
---*/

function testcase() {

        return [1, 2, 3, 4].indexOf(4, -1) === 3;
    }
runTestCase(testcase);
