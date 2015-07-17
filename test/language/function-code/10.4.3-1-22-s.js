// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-22-s
description: >
    Strict Mode - checking 'this' (New'ed object from
    FunctionDeclaration includes strict directive prologue)
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
function f() {
    "use strict";
    return this;
}
return ( (new f())!==fnGlobalObject()) && (typeof (new f()) !== "undefined");

}
runTestCase(testcase);
