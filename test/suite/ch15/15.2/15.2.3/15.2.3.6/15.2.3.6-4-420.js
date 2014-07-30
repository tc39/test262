// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-420
description: >
    ES5 Attributes - Failed to add a property to an object when the
    object's prototype has a property with the same name and
    [[Writable]] set to false(Function.prototype.bind)
includes: [runTestCase.js]
---*/

function testcase() {
        var foo = function () { };
        try {
            Object.defineProperty(Function.prototype, "prop", {
                value: 1001,
                writable: false,
                enumerable: false,
                configurable: true
            });

            var obj = foo.bind({});
            obj.prop = 1002;

            return !obj.hasOwnProperty("prop") && obj.prop === 1001;
        } finally {
            delete Function.prototype.prop;
        }
    }
runTestCase(testcase);
