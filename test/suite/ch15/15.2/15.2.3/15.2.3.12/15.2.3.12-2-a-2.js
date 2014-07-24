// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.12-2-a-2
description: >
    Object.isFrozen - 'P' is own data property that overrides an
    inherited data property
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = {};

        Object.defineProperty(proto, "foo", {
            value: 9,
            writable: false,
            configurable: false
        });

        var Con = function () { };
        Con.prototype = proto;
        var child = new Con();

        Object.defineProperty(child, "foo", {
            value: 12,
            writable: true,
            configurable: false
        });

        Object.preventExtensions(child);
        return !Object.isFrozen(child);
    }
runTestCase(testcase);
