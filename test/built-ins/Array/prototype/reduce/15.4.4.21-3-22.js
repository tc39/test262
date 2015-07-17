// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-3-22
description: >
    Array.prototype.reduce throws TypeError exception - 'length' is an
    object with toString and valueOf methods that don�t return
    primitive values
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var valueOfAccessed = false;
        var toStringAccessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return true;
        }

        var obj = {
            1: 11,
            2: 12,

            length: {
                valueOf: function () {
                    valueOfAccessed = true;
                    return {};
                },
                toString: function () {
                    toStringAccessed = true;
                    return {};
                }
            }
        };

        try {
            Array.prototype.reduce.call(obj, callbackfn, 1);
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && !accessed && toStringAccessed && valueOfAccessed;
        }
    }
runTestCase(testcase);
