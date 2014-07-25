/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-3-29.js
 * @description Array.prototype.map - value of 'length' is boundary value (2^32 + 1)
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = {
            0: 11,
            1: 9,
            length: 4294967297
        };

        try {
            var newArr = Array.prototype.map.call(obj, callbackfn);
        } catch (e) {
            if (e instanceof RangeError) {
                return true;
            }
        }
    }
runTestCase(testcase);
