/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-3-7.js
 * @description Array.prototype.map - 'length' is a string containing a negative number
 */


function testcase() {
        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = { 0: 10, 1: 12, 2: 9, length: -4294967294 };

        var newArr = Array.prototype.map.call(obj, callbackfn);

        return newArr.length === 0;
    }
runTestCase(testcase);
