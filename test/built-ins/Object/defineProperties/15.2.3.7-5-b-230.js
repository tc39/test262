// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-230
description: >
    Object.defineProperties - 'set' property of 'descObj' is own data
    property that overrides an inherited data property (8.10.5 step
    8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var data1 = "data";
        var data2 = "data";
        var proto = {
            set: function (value) {
                data2 = value;
            }
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.set = function (value) {
            data1 = value;
        };

        var obj = {};

        Object.defineProperties(obj, {
            prop: child
        });

        obj.prop = "overrideData";

        return obj.hasOwnProperty("prop") && data1 === "overrideData" && data2 === "data";
    }
runTestCase(testcase);
