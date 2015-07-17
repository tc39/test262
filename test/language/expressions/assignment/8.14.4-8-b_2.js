// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.14.4-8-b_2
description: Non-writable property on a prototype written to in strict mode.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
    function foo() {};
    Object.defineProperty(foo.prototype, "bar", {value: "unwritable"}); 
    
    var o = new foo(); 
    try {
        o.bar = "overridden"; 
        return false;
    } catch(e) {
        return (e instanceof TypeError) && (o.bar==="unwritable");
    }
}
runTestCase(testcase);
