// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11-1
description: Error - ConversionError has been removed from IE9 standard mode
includes: [runTestCase.js]
---*/

function testcase() {
        return typeof ConversionError === "undefined";
    }
runTestCase(testcase);
