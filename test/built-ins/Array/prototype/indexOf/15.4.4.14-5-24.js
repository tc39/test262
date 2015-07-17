// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-24
description: >
    Array.prototype.indexOf throws TypeError exception when value of
    'fromIndex' is an object with toString and valueOf methods that
    don�t return primitive values
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
            [0, true].indexOf(true, fromIndex);
            return false;
        } catch (e) {
            return toStringAccessed && valueOfAccessed;
        }
    }
runTestCase(testcase);
