// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-4
description: >
    Function.prototype.bind - F can get own data property that
    overrides an inherited accessor property
includes: [runTestCase.js]
---*/

function testcase() {

        var foo = function () { };

        var obj = foo.bind({});
        try {
            Object.defineProperty(Function.prototype, "property", {
                get: function () {
                    return 3;
                },
                configurable: true
            });
           
            Object.defineProperty(obj, "property", {
                value: 12
            });

            return obj.property === 12;
        } finally {
            delete Function.prototype.property;
        }
    }
runTestCase(testcase);
