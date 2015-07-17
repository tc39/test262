// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-11
description: >
    Object.defineProperties - 'P' is inherited accessor property
    without a get function (8.12.9 step 1 )
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "prop", {
            set: function () { },
            configurable: false
        });
        var Con = function () { };
        Con.prototype = proto;

        var obj = new Con();

        Object.defineProperties(obj, {
            prop: {
                get: function () {
                    return 12;
                },
                configurable: true
            }
        });
        return obj.hasOwnProperty("prop") && obj.prop === 12;

    }
runTestCase(testcase);
