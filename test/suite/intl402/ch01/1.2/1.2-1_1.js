/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.

/**
 * @path intl402/ch01/1.2/1.2-1_1.js
 * @description This is an example showing how to create Ecma standard 402 tests alongside test262 tests. Should be removed once the 402 effort gets underway
 */

//The first test case for a hypothetical Step 1 of section 1.2 in the Ecma 
//standard 402. Yay!

function testcase() {
    "use strict";
    
    //whether the test case passed or failed
    var passed = false;
    
    //Here is where you'd actually test Step 1 of section 1.2 of the 
    //hypothetical standard.  If the test passed against an 
    //implementation, you'd set passed to 'true'.
    passed = true;
    
    return passed; 
}
runTestCase(testcase);
