/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-3-12.js
 * @description Array.prototype.every - 'length' is a string containing a negative number
 */


function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var obj = { 0: 11, 1: 12, 2: 9, length: "-4294967294" };

        return Array.prototype.every.call(obj, callbackfn1) &&
            Array.prototype.every.call(obj, callbackfn2);
    }
runTestCase(testcase);
