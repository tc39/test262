// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-246
description: >
    Object.defineProperty - 'set' property in 'Attributes' is own
    accessor property(without a get function) that overrides an
    inherited accessor property (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var proto = {};
        var data = "data";
        Object.defineProperty(proto, "set", {
            get: function () {
                return function (value) {
                    data = value;
                };
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        Object.defineProperty(child, "set", {
            set: function () { }
        });

        Object.defineProperty(obj, "property", child);

        obj.property = "overrideData";
        return obj.hasOwnProperty("property") && typeof obj.property === "undefined" && data === "data";
    }
runTestCase(testcase);
