// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-61-s
description: >
    Strict Mode - checking 'this' (Injected setter includes strict
    directive prologue)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
var o = {};
var x = 2;
Object.defineProperty(o, "foo", { set: function(stuff) { "use strict"; x=this; } });
o.foo = 3;
return x===o;
}
runTestCase(testcase);
