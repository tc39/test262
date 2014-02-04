/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-3-14.js
 * @description Array.prototype.every - 'length' is a string containing +/-Infinity
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var objOne = { 0: 9, length: "Infinity" };
        var objTwo = { 0: 9, length: "+Infinity" };
        var objThree = { 0: 9, length: "-Infinity" };

        return !Array.prototype.every.call(objOne, callbackfn) &&
            !Array.prototype.every.call(objTwo, callbackfn) &&
            Array.prototype.every.call(objThree, callbackfn) && accessed;
    }
runTestCase(testcase);
