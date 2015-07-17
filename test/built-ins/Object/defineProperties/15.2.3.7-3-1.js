// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-3-1
description: >
    Object.defineProperties - enumerable own data property of
    'Properties' is defined in 'O'
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};      
        var props = {};
        Object.defineProperty(props, "prop", {
            value: {},
            enumerable: true
        });

        Object.defineProperties(obj, props);

        return obj.hasOwnProperty("prop");
    }
runTestCase(testcase);
