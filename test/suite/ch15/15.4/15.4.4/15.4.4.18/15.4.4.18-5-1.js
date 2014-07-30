// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.18-5-1
description: Array.prototype.forEach - thisArg is passed
includes: [runTestCase.js]
---*/

function testcase() {
        this._15_4_4_18_5_1 = false;
        var _15_4_4_18_5_1 = true;
        var result;
        function callbackfn(val, idx, obj) {
            result = this._15_4_4_18_5_1;
        }
        var arr = [1];
        arr.forEach(callbackfn)
        return !result;
    }
runTestCase(testcase);
