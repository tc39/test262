// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.9-9-c-i_1
description: >
    Redefine a configurable accessor property to be a data property on
    a non-extensible object
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};
    Object.defineProperty(o, "foo", 
                          { get: function() { return 5;}, 
                            configurable: true});
    Object.preventExtensions(o);
    Object.defineProperty(o, "foo", { value: "hello"});

    var fooDescrip = Object.getOwnPropertyDescriptor(o, "foo");
    return o.foo==="hello" && fooDescrip.get===undefined && fooDescrip.set===undefined && fooDescrip.value==="hello" && fooDescrip.configurable===true && fooDescrip.enumerable===false && fooDescrip.writable===false;
}
runTestCase(testcase);
