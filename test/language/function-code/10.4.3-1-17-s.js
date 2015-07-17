// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-17-s
description: Strict Mode - checking 'this' (eval used within strict mode)
flags: [onlyStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
return (eval("typeof this") === "undefined") && (eval("this") !== fnGlobalObject());
}
runTestCase(testcase);
