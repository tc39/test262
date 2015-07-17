// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-20-s
description: >
    StrictMode - enumerating over a function object looking for
    'arguments' fails inside the function
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
            var foo = Function("'use strict'; for (var tempIndex in this) {if (tempIndex===\"arguments\") {return false;}}; return true;");
            return foo.call(foo);
}
runTestCase(testcase);
