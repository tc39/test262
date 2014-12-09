// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-8-c-4
description: >
    Array.prototype.reduce doesn't throw error when array has no own
    properties but prototype contains a single property
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [, , , ];

        try {
            Array.prototype[1] = "prototype";
            arr.reduce(function () { });
            return true;
        } catch (ex) {
            return false;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
