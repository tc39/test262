// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties will not throw TypeError if P.configurable
    is false, P.writalbe is false, P.value is null and
    properties.value is null (8.12.9 step 10.a.ii.1)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { 
            value: null, 
            writable: false, 
            configurable: false 
        });

        Object.defineProperties(obj, {
            foo: {
                value: null
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", null, false, false, false);
    }
runTestCase(testcase);
