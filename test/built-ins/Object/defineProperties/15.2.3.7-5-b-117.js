// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-117
description: >
    Object.defineProperties - 'value' property of 'descObj' is own
    data property that overrides an inherited accessor property
    (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "value", {
            get: function () {
                return "inheritedAccessorProperty";
            }
        });

        var Con = function () { };
        Con.prototype = proto;

        var descObj = new Con();

        Object.defineProperty(descObj, "value", {
            value: "ownDataProperty"
        });

        Object.defineProperties(obj, {
            property: descObj
        });

        return obj.property === "ownDataProperty";

    }
runTestCase(testcase);
