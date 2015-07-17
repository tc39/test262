// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-11
description: Object.defineProperties - argument 'Properties' is the Math object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var result = false;
       
        try {
            Object.defineProperty(Math, "prop", {
                get: function () {
                    result = (this === Math);
                    return {};
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperties(obj, Math);
            return result;
        } finally {
            delete Math.prop;
        }
    }
runTestCase(testcase);
