// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-3-12
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing negative number
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {1: null, 2: undefined, length: "-4294967294"};

        return Array.prototype.lastIndexOf.call(obj, null) === -1 &&
            Array.prototype.lastIndexOf.call(obj, undefined) === -1;
    }
runTestCase(testcase);
