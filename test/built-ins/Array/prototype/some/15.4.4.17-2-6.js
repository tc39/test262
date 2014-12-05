// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-2-6
description: >
    Array.prototype.some - 'length' is an inherited data property on
    an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var proto = { length: 2 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child[0] = 9;
        child[1] = 11;
        child[2] = 12;

        return Array.prototype.some.call(child, callbackfn1) &&
            !Array.prototype.some.call(child, callbackfn2);
    }
runTestCase(testcase);
