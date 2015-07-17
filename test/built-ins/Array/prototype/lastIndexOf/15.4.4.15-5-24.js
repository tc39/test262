// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-24
description: >
    Array.prototype.lastIndexOf throws TypeError exception when value
    of 'fromIndex' is an object that both toString and valueOf methods
    than don't return primitive value
includes: [runTestCase.js]
---*/

function testcase() {

        var toStringAccessed = false;
        var valueOfAccessed = false;

        var fromIndex = {
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
            [0, null].lastIndexOf(null, fromIndex);
            return false;
        } catch (e) {
            return toStringAccessed && valueOfAccessed;
        }
    }
runTestCase(testcase);
