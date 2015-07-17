// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-11
description: >
    Function.prototype.bind - F can get inherited accessor property
    without a get function
includes: [runTestCase.js]
---*/

function testcase() {

        var foo = function () { };

        var obj = foo.bind({});
        try {
            Object.defineProperty(Function.prototype, "property", {
                set: function () { },
                configurable: true
            });
            return typeof (obj.property) === "undefined";
        } finally {
            delete Function.prototype.property;
        }
    }
runTestCase(testcase);
