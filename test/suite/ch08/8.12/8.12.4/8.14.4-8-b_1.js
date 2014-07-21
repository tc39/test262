// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Non-writable property on a prototype written to.
includes: [runTestCase.js]
---*/

function testcase() {   
    function foo() {};
    Object.defineProperty(foo.prototype, "bar", {value: "unwritable"}); 
    
    var o = new foo(); 
    o.bar = "overridden"; 
    return o.hasOwnProperty("bar")===false && o.bar==="unwritable";
}
runTestCase(testcase);
