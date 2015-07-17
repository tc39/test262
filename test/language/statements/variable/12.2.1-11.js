// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-11
description: arguments as var identifier in eval code is allowed
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
    eval("var arguments;");
    return true;
 }
runTestCase(testcase);
