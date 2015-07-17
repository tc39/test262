// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-1
description: >
    7.3 - ES5 recognizes the character <LS> (\u2028) as line
    terminators when parsing statements
includes: [runTestCase.js]
---*/

function testcase() {
        var test7_3_1, prop;
        eval("test7_3_1\u2028prop = 66;");
        return (prop === 66) && ((typeof test7_3_1) === "undefined");
    }
runTestCase(testcase);
