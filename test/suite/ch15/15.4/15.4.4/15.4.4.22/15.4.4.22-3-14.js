/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-3-14.js
 * @description Array.prototype.reduceRight - value of 'length' is a string containing -Infinity
 */


function testcase() {

        var accessed2 = false;

        function callbackfn2(prevVal, curVal, idx, obj) {
            accessed2 = true;
        }

        var obj2 = { 0: 9, length: "-Infinity" };

        return Array.prototype.reduceRight.call(obj2, callbackfn2, 2) === 2 &&
            !accessed2;
    }
runTestCase(testcase);
