// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-38-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression
    defined within a FunctionDeclaration with a strict directive
    prologue)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
function f1() {
    "use strict";
    return ((function () {
        return typeof this;
    })()==="undefined") && ((typeof this)==="undefined");
}
return f1();
}
runTestCase(testcase);
