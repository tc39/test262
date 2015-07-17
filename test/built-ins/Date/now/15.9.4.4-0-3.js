// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.4.4-0-3
description: Date.now must exist as a function
includes: [runTestCase.js]
---*/

function testcase() {

        var fun = Date.now;
        return (typeof (fun) === "function");
    }
runTestCase(testcase);
