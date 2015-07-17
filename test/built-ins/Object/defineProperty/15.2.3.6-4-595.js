// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-595
description: >
    ES5 Attributes - Inherited property is enumerable
    (Function.prototype.bind)
includes: [runTestCase.js]
---*/

function testcase() {
        var foo = function () { };
        var data = "data";
        try {
            Object.defineProperty(Function.prototype, "prop", {
                get: function () {
                    return data;
                },
                set: function (value) {
                    data = value;
                },
                enumerable: true,
                configurable: true
            });

            var obj = foo.bind({});

            var verifyEnumerable = false;
            for (var p in obj) {
                if (p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !obj.hasOwnProperty("prop") && verifyEnumerable;
        } finally {
            delete Function.prototype.prop;
        }
    }
runTestCase(testcase);
