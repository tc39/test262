// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-23
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is an object
    that has an own valueOf method that returns an object and toString
    method that returns a string
includes: [runTestCase.js]
---*/

function testcase() {

        var toStringAccessed = false;
        var valueOfAccessed = false;

        var fromIndex = {
            toString: function () {
                toStringAccessed = true;
                return '1';
            },

            valueOf: function () {
                valueOfAccessed = true;
                return {};
            }
        };

        return [0, true].lastIndexOf(true, fromIndex) === 1 && toStringAccessed && valueOfAccessed;
    }
runTestCase(testcase);
