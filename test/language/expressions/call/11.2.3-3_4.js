// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.2.3-3_4
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (property)
includes: [runTestCase.js]
---*/

function testcase() {
    var fooCalled = false;
    function foo(){ fooCalled = true; } 
    
    var o = { }; 
    Object.defineProperty(o, "bar", {get: function()  {this.barGetter = true; return 42;}, 
                                     set: function(x) {this.barSetter = true; }});
    try {
        o.bar( foo() );
        $ERROR("o.bar does not exist!");
    } catch(e) {
        return (e instanceof TypeError) && (fooCalled===true) && (o.barGetter===true) && (o.barSetter===undefined);
    }
}
runTestCase(testcase);
