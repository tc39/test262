// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-15
description: 7.3 - ES5 recognize <BOM> (\uFFFF) as a whitespace character
includes: [runTestCase.js]
---*/

function testcase() {
        var prop = "a\uFFFFa";
        return prop.length === 3 && prop !== "aa" && prop[1] === "\uFFFF";
    }
runTestCase(testcase);
