// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-45
description: >
    Object.defineProperty - argument 'P' is an object whose toString
    method returns an object and whose valueOf method returns a
    primitive value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var toStringAccessed = false;
        var valueOfAccessed = false;

        var ownProp = {
            toString: function () {
                toStringAccessed = true;
                return {};
            },
            valueOf: function () {
                valueOfAccessed = true;
                return "abc";
            }
        };

        Object.defineProperty(obj, ownProp, {});

        return obj.hasOwnProperty("abc") && valueOfAccessed && toStringAccessed;
    }
runTestCase(testcase);
