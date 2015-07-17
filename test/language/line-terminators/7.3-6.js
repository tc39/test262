// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-6
description: >
    7.3 - ES5 recognizes the character <PS> (\u2029) as terminating
    string literal
includes: [runTestCase.js]
---*/

function testcase() {
        var prop = "66\u2029123";
        return prop === "66\u2029123" && prop[2] === "\u2029" && prop.length === 6;
    }
runTestCase(testcase);
