// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-1-3
description: Array.isArray applied to number primitive
includes: [runTestCase.js]
---*/

function testcase() {

        return !Array.isArray(5);
    }
runTestCase(testcase);
