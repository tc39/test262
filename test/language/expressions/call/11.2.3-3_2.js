// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.2.3-3_2
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (FunctionExpression)
includes: [runTestCase.js]
---*/

function testcase() {
    var fooCalled = false;
    var foo = function (){ fooCalled = true; } 
    
    var o = { }; 
    try {
        o.bar( foo() );
        $ERROR("o.bar does not exist!");
    } catch(e) {
        return (e instanceof TypeError) && (fooCalled===true);
    }
}
runTestCase(testcase);
