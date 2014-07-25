/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-3-14.js
 * @description Array.prototype.indexOf - 'length' is a string containing +/-Infinity
 */


function testcase() {

        var objOne = { 0: true, 1: true, length: "Infinity" };
        var objTwo = { 0: true, 1: true, length: "+Infinity" };
        var objThree = { 0: true, 1: true, length: "-Infinity" };

        return Array.prototype.indexOf.call(objOne, true) === 0 &&
            Array.prototype.indexOf.call(objTwo, true) === 0 &&
            Array.prototype.indexOf.call(objThree, true) === -1;
    }
runTestCase(testcase);
