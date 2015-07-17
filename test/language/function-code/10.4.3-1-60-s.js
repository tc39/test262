// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-60-s
description: >
    checking 'this' (Injected setter)
includes: [runTestCase.js]
---*/

function testcase() {
var o = {};
var x = 2;
Object.defineProperty(o, "foo", { set: function(stuff) { x=this; } });
o.foo = 3;
return x===o;
}
runTestCase(testcase);
