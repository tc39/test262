// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Error.prototype.toString return empty string when 'name' is empty
    string and 'msg' is undefined
includes: [runTestCase.js]
---*/

function testcase() {
        var errObj = new Error();
        errObj.name = "";
        return errObj.toString() === "";
    }
runTestCase(testcase);
