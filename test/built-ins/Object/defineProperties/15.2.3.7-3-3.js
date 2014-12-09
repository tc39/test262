// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-3-3
description: >
    Object.defineProperties - enumerable inherited data property of
    'Properties' is not defined in 'O'
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "prop", {
            value: {},
            enumerable: true
        });

        var Con = function () { };
        Con.prototype = proto;
        var child = new Con();

        Object.defineProperties(obj, child);

        return !obj.hasOwnProperty("prop");
    }
runTestCase(testcase);
