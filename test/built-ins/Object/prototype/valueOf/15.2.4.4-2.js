// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.4.4-2
description: >
    Object.prototype.valueOf - typeof
    Object.prototype.valueOf.call(false)==="object"
includes: [runTestCase.js]
---*/

function testcase() {
        return (typeof Object.prototype.valueOf.call(false)) === "object";
}
runTestCase(testcase);
