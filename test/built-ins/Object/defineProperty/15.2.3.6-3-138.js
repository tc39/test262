// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-138
description: >
    Object.defineProperty - 'value' property in 'Attributes' is an
    inherited accessor property without a get function  (8.10.5 step
    5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { property : 120 };

        var proto = {};
        Object.defineProperty(proto, "value", {
            set: function () { }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();

        Object.defineProperty(obj, "property", child);

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
