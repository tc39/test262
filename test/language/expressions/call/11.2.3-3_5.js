// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.2.3-3_5
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (eval'ed)
includes: [runTestCase.js]
---*/

function testcase() {
    var fooCalled = false;
    function foo(){ fooCalled = true; } 
    
    var o = { }; 
    try {
        eval("o.bar( foo() );");
        $ERROR("o.bar does not exist!");
    } catch(e) {
        return (e instanceof TypeError) && (fooCalled===true);
    }
}
runTestCase(testcase);
