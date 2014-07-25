/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-3-25.js
 * @description Array.prototype.filter - value of 'length' is a negative non-integer
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = {
            1: 11,
            2: 9,
            length: -4294967294.5
        };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 0 && newArr[0] === undefined;
    }
runTestCase(testcase);
