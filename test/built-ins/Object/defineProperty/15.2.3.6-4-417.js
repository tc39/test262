// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-417
description: >
    ES5 Attributes - [[Value]] attribute of inherited property of
    [[Prototype]] internal property is correct(Function.prototype.bind)
includes: [runTestCase.js]
---*/

function testcase() {
        var foo = function () { };
        try {
            Object.defineProperty(Function.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });

            var obj = foo.bind({});

            return !obj.hasOwnProperty("prop") && obj.prop === 1001;
        } finally {
            delete Function.prototype.prop;
        }
    }
runTestCase(testcase);
