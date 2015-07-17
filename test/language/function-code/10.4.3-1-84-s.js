// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-84-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict new'ed Function constructor)
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
fnGlobalObject().f = function()  { return this!==undefined;};
return (function () {return new Function("\"use strict\";return f();")();})();
}
runTestCase(testcase);
