// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-75-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.call(globalObject))
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
function f() { "use strict"; return this;};
return f.call(fnGlobalObject()) === fnGlobalObject();
}
runTestCase(testcase);
