// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-5
description: >
    Date.prototype.toISOString - The returned string is the UTC time
    zone(0)
includes: [runTestCase.js]
---*/

function testcase() {
        var dateStr = (new Date()).toISOString();
        return dateStr[dateStr.length - 1] === "Z";
    }
runTestCase(testcase);
