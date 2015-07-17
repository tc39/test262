// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-43
description: >
    Object.defineProperty - argument 'P' is an object that has an own
    toString method
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var ownProp = {
            toString: function () {
                return "abc";
            }
        };

        Object.defineProperty(obj, ownProp, {});

        return obj.hasOwnProperty("abc");

    }
runTestCase(testcase);
