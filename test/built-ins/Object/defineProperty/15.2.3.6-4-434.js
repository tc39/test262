// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-434
description: >
    ES5 Attributes - property ([[Get]] is undefined, [[Set]] is
    undefined, [[Enumerable]] is true, [[Configurable]] is false) is
    undeletable
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: false
        });

        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        delete obj.prop;

        return propertyDefineCorrect && desc.configurable === false && obj.hasOwnProperty("prop");
    }
runTestCase(testcase);
