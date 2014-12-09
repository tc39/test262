// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-1-14
description: Array.prototype.lastIndexOf applied to Error object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new SyntaxError();
        obj.length = 2;
        obj[1] = Infinity;

        return Array.prototype.lastIndexOf.call(obj, Infinity) === 1;
    }
runTestCase(testcase);
