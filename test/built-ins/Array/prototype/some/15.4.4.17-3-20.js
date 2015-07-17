// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-3-20
description: >
    Array.prototype.some - value of 'length' is an Object which has an
    own valueOf method
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var valueOfAccessed = false;

        var obj = {
            0: 9,
            1: 11,
            2: 12,
            length: {
                valueOf: function () {
                    valueOfAccessed = true;
                    return 2;
                }
            }
        };

        return Array.prototype.some.call(obj, callbackfn1) &&
            !Array.prototype.some.call(obj, callbackfn2) && valueOfAccessed;
    }
runTestCase(testcase);
