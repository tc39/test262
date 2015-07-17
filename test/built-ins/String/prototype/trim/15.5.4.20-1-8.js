// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-1-8
description: >
    String.prototype.trim works for a primitive string (value is '
    abc')
includes: [runTestCase.js]
---*/

function testcase() {
        var strObj = String("    abc");
        return "abc" === strObj.trim() && strObj.toString() === "    abc";
    }
runTestCase(testcase);
