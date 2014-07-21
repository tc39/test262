// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - 'name' and 'desc' are data properties,
    name.enumerable and desc.enumerable are different values (8.12.9
    step 12)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", {
            enumerable: false,
            configurable: true
        });

        Object.defineProperty(obj, "foo", {
            enumerable: true
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, false, true, true);
    }
runTestCase(testcase);
