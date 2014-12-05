// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-4
description: Object.freeze - Non-enumerable own properties of 'O' are frozen
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "foo", {
            value: 10,
            enumerable: false,
            configurable: true
        });

        Object.freeze(obj);

        var desc = Object.getOwnPropertyDescriptor(obj, "foo");

        var beforeDeleted = obj.hasOwnProperty("foo");
        delete obj.foo;
        var afterDeleted = obj.hasOwnProperty("foo");

        return beforeDeleted && afterDeleted && desc.configurable === false && desc.writable === false;
    }
runTestCase(testcase);
