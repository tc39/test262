// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-76
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    an inherited data property (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var proto = {
            configurable: false
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();

        Object.defineProperty(obj, "property", child);

        var beforeDeleted = obj.hasOwnProperty("property");

        delete obj.property;

        var afterDeleted = obj.hasOwnProperty("property");
        return beforeDeleted && afterDeleted && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
