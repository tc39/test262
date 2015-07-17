// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-8-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration includes strict
    directive prologue)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
function f() {
    "use strict";
    return typeof this;
}
return f() === "undefined";
}
runTestCase(testcase);
