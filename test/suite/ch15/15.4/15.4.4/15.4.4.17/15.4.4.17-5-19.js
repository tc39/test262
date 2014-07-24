// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-5-19
description: Array.prototype.some - the Arguments object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var arg;

        function callbackfn(val, idx, obj) {
            return this === arg;
        }

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        return [11].some(callbackfn, arg);
    }
runTestCase(testcase);
