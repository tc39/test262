// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-225-1
description: >
    Object.defineProperty - 'Attributes' is a RegExp object that uses
    Object's [[Get]] method to access the 'get' property of prototype
    object (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            RegExp.prototype.get = function () {
                return "regExpGetProperty";
            };
            var regObj = new RegExp();


            Object.defineProperty(obj, "property", regObj);

            return obj.property === "regExpGetProperty";
        } finally {
            delete RegExp.prototype.get;
        }
    }
runTestCase(testcase);
