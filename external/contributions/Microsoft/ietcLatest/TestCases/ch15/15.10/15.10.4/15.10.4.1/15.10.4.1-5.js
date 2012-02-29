/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.10/15.10.4/15.10.4.1/15.10.4.1-5.js
 * @description RegExp - the 'source' property of an empty RegExp should not be the empty string 
 */


function testcase() {
    var regObj = new RegExp();
    return (regObj.source!=="") && (RegExp().source!=="");
}
runTestCase(testcase);
