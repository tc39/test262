// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-3-22
description: >
    Array.prototype.every throws TypeError exception when 'length' is
    an object with toString and valueOf methods that don�t return
    primitive values
includes: [runTestCase.js]
---*/

function testcase() {

        var callbackfnAccessed = false;
        var toStringAccessed = false;
        var valueOfAccessed = false;

        function callbackfn(val, idx, obj) {
            callbackfnAccessed = true;
            return val > 10;
        }

        var obj = {
            0: 11,
            1: 12,

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
            Array.prototype.every.call(obj, callbackfn);
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && toStringAccessed && valueOfAccessed && !callbackfnAccessed;
        }
    }
runTestCase(testcase);
