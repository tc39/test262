// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-239
description: >
    Object.create - 'get' property of one property in 'Properties' is
    own accessor property that overrides an inherited data property
    (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {
            get: function () {
                return "inheritedDataProperty";
            }
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var descObj = new ConstructFun();

        Object.defineProperty(descObj, "get", {
            get: function () {
                return function () {
                    return "ownAccessorProperty";
                };
            }
        });

        var newObj = Object.create({}, {
            prop: descObj
        });

        return newObj.prop === "ownAccessorProperty";
    }
runTestCase(testcase);
