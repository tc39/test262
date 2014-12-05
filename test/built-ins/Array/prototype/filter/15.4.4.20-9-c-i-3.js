// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-9-c-i-3
description: >
    Array.prototype.filter - element to be retrieved is own data
    property that overrides an inherited data property on an
    Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return (idx === 5) && (val === "abc");
        }

        var proto = { 0: 11, 5: 100 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child[5] = "abc";
        child.length = 10;

        var newArr = Array.prototype.filter.call(child, callbackfn);

        return newArr.length === 1 && newArr[0] === "abc";
    }
runTestCase(testcase);
