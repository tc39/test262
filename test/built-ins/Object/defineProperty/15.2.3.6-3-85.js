// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-85
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    an inherited accessor property without a get function (8.10.5 step
    4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var proto = {};
        Object.defineProperty(proto, "configurable", {
            set: function () { }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();

        Object.defineProperty(obj, "property", child);

        var beforeDeleted = obj.hasOwnProperty("property");

        delete obj.property;

        var afterDeleted = obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";

        return beforeDeleted === true && afterDeleted === true;
    }
runTestCase(testcase);
