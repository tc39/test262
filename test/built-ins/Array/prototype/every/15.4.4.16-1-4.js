// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-1-4
description: Array.prototype.every applied to Boolean object
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return obj instanceof Boolean;
        }

        var obj = new Boolean(true);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;
        return Array.prototype.every.call(obj, callbackfn) && accessed;
    }
runTestCase(testcase);
