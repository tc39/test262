// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-23-s
description: >
    Strict Mode - checking 'this' (New'ed object from
    FunctionExpression defined within strict mode)
flags: [onlyStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
var f = function () {
    return this;
}
return ( (new f())!==fnGlobalObject()) && (typeof (new f()) !== "undefined");

}
runTestCase(testcase);
