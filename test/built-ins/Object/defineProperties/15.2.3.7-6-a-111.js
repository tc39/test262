// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-111
description: Object.defineProperties - each properties are in list order
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        function get_func() {
            return 20;
        }

        function set_func() { }

        var properties = {
            a: {
                value: 100,
                enumerable: true,
                writable: true,
                configurable: true
            },
            b: {
                get: get_func,
                set: set_func,
                enumerable: true,
                configurable: true
            },
            c: {
                value: 200,
                enumerable: true,
                writable: true,
                configurable: true
            }
        };

        Object.defineProperties(obj, properties);
        return (obj["a"] === 100 && obj["b"] === 20 && obj["c"] === 200);

    }
runTestCase(testcase);
