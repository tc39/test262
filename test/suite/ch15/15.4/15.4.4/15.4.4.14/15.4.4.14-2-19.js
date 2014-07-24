// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-2-19
description: >
    Array.prototype.indexOf applied to Function object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = function (a, b) {
            return a + b;
        };
        obj[1] = "b";
        obj[2] = "c";

        return Array.prototype.indexOf.call(obj, obj[1]) === 1 &&
            Array.prototype.indexOf.call(obj, obj[2]) === -1;
    }
runTestCase(testcase);
