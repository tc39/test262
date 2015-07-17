// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-4-1
description: Object.isFrozen returns false if extensible is true
includes: [runTestCase.js]
---*/

function testcase() {
        return !Object.isFrozen({});
    }
runTestCase(testcase);
