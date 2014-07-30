// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
