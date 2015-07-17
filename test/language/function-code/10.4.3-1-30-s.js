// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-30-s
description: >
    Strict Mode - checking 'this' (FunctionDeclaration defined within
    a FunctionExpression inside strict mode)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
var f1 = function () {
    function f() {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
return f1();
}
runTestCase(testcase);
