// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-59-s
description: >
    checking 'this' (Injected getter includes strict directive prologue)
includes: [runTestCase.js]
---*/

function testcase() {
var o = {};
Object.defineProperty(o, "foo", { get: function() { "use strict"; return this; } });
return o.foo===o;
}
runTestCase(testcase);
