// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-93-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.call(someObject))
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
var o = {};
function f() { return this===o;};
return (function () {"use strict"; return f.call(o); })();
}
runTestCase(testcase);
