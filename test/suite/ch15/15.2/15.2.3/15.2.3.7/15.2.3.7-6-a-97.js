// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'P' is data property, P.writable and
    properties.writable are different values (8.12.9 step 12)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { 
            value: 100, 
            enumerable: true, 
            writable: false, 
            configurable: true 
        });

        Object.defineProperties(obj, {
            foo: {
                writable: true
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", 100, true, true, true);
    }
runTestCase(testcase);
