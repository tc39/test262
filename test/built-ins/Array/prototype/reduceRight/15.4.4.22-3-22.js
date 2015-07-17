// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-3-22
description: >
    Array.prototype.reduceRight throws TypeError exception when
    'length' is an object with toString and valueOf methods that don�t
    return primitive values
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var toStringAccessed = false;
        var valueOfAccessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
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
            Array.prototype.reduceRight.call(obj, callbackfn, 1);
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && toStringAccessed && valueOfAccessed && !accessed;
        }
    }
runTestCase(testcase);
