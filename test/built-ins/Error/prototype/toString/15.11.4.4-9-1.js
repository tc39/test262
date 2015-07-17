// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.4-9-1
description: >
    Error.prototype.toString return 'name' when 'name' is non-empty
    string and 'msg' is empty string
includes: [runTestCase.js]
---*/

function testcase() {
        var errObj = new Error();
        errObj.name = "ErrorName";
        return errObj.toString() === "ErrorName";
    }
runTestCase(testcase);
