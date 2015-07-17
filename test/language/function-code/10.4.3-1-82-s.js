// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-82-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict eval)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
function f() { return this!==undefined;};
return (function () {"use strict"; return eval("f();");})();
}
runTestCase(testcase);
