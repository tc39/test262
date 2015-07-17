// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.4.2-2-2
description: >
    Object.prototype.toString - '[object Null]' will be returned when
    'this' value is null
includes: [runTestCase.js]
---*/

function testcase() {
        return Object.prototype.toString.apply(null, []) === "[object Null]";
    }
runTestCase(testcase);
