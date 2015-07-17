// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-388
description: >
    ES5 Attributes - [[Value]] attribute of data property is a Number
    object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var numObj = new Number();

        Object.defineProperty(obj, "prop", {
            value: numObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === numObj && desc.value === numObj;
    }
runTestCase(testcase);
