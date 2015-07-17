// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-44
description: >
    String.prototype.trim - 'this' is a string that contains east
    Asian characters (value is 'SD咕噜')
includes: [runTestCase.js]
---*/

function testcase() {
        var str = "SD咕噜";
        return str.trim() === str;
    }
runTestCase(testcase);
