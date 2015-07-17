// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-20-s
description: >
    Strict Mode - checking 'this' (indirect eval includes strict
    directive prologue)
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
var my_eval = eval;
return my_eval("\"use strict\";\nthis") === fnGlobalObject();
}
runTestCase(testcase);
