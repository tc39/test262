// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-234
description: >
    Object.defineProperties - 'set' property of 'descObj' is own
    accessor property that overrides an inherited data property
    (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var data1 = "data";
        var data2 = "data";

        var proto = {};
        proto.set = function (value) {
            data1 = value;
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        Object.defineProperty(child, "set", {
            get: function () {
                return function (value) {
                    data2 = value;
                };
            }
        });

        var obj = {};

        Object.defineProperties(obj, {
            prop: child
        });
        obj.prop = "overrideData";

        return obj.hasOwnProperty("prop") && data2 === "overrideData" && data1 === "data";

    }
runTestCase(testcase);
