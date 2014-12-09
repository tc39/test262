// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-402
description: >
    ES5 Attributes - [[Value]] attribute of inherited property of
    [[Prototype]] internal property is correct (String instance)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(String.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var strObj = new String();

            return !strObj.hasOwnProperty("prop") && strObj.prop === 1001;
        } finally {
            delete String.prototype.prop;
        }
    }
runTestCase(testcase);
