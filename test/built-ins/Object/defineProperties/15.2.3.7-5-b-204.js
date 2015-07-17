// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-204
description: >
    Object.defineProperties - 'descObj' is a Function object which
    implements its own [[Get]] method to get 'get' property (8.10.5
    step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var func = function (a, b) {
            return a + b;
        };

        func.get = function () {
            return "Function";
        };

        Object.defineProperties(obj, {
            property: func
        });

        return obj.property === "Function";
    }
runTestCase(testcase);
