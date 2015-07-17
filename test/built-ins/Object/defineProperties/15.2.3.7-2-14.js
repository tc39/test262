// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-14
description: Object.defineProperties - argument 'Properties' is the JSON object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var result = false;

        try {
            Object.defineProperty(JSON, "prop", {
                get: function () {
                    result = (this === JSON);
                    return {};
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperties(obj, JSON);
            return result;
        } finally {
            delete JSON.prop;
        }
    }
runTestCase(testcase);
