// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-8-s
description: >
    StrictMode - enumerating over a function object looking for
    'caller' fails inside the function
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
            var foo = new Function("'use strict'; for (var tempIndex in this) {if (tempIndex===\"caller\") {return false;}}; return true;");
            return foo.call(foo);
    }
runTestCase(testcase);
