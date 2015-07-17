// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.2.3-3_7
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (getter called as indexed property)
includes: [runTestCase.js]
---*/

function testcase() {
    var o = { }; 
    Object.defineProperty(o, "bar", {get: function()  {this.barGetter = true; return 42;}, 
                                     set: function(x) {this.barSetter = true; }});
    try {
        o.foo( o["bar"] );
        $ERROR("o.foo does not exist!");
    } catch(e) {
        return (e instanceof TypeError) && (o.barGetter===true) && (o.barSetter===undefined);
    }
}
runTestCase(testcase);
