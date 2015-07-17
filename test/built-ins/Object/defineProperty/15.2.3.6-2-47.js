// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-47
description: >
    Object.defineProperty - TypeError exception is thrown  when 'P' is
    an object that neither toString nor valueOf returns a primitive
    value
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
                return {};
            }
        };

        try {
            Object.defineProperty(obj, ownProp, {});
            return false;
        } catch (e) {
            return valueOfAccessed && toStringAccessed && e instanceof TypeError;
        }
    }
runTestCase(testcase);
