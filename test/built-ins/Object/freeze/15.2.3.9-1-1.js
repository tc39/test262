// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-1-1
description: >
    Object.freeze does not throw TypeError if type of first param is
    undefined
includes: [runTestCase.js]
---*/

function testcase() {
    Object.freeze(undefined);
    return true;
}
runTestCase(testcase);
