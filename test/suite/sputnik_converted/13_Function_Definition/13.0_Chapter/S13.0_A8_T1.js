// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A8_T1;
* @section: 13;
* @assertion: Arguments property of activation object contains real params to be passed;
* @description: Creating a function declared with "function __func(param1, param2, param3)" and using arguments.length property in order to perform the test; 
*/

 
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A8_T1",

path: "13_Function_Definition\13.0_Chapter\S13.0_A8_T1.js",

assertion: "Arguments property of activation object contains real params to be passed",

description: "Creating a function declared with \"function __func(param1, param2, param3)\" and using arguments.length property in order to perform the test",

test: function testcase() {
   function __func(param1, param2, param3) {
 	return arguments.length;
 }
 
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func('A') !== 1) {
 	$ERROR('#1: __func(\'A\') === 1. Actual: __func(\'A\') ==='+__func('A'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__func('A', 'B', 1, 2,__func) !== 5) {
	$ERROR('#2: __func(\'A\', \'B\', 1, 2,__func) === 5. Actual: __func(\'A\', \'B\', 1, 2,__func) ==='+__func('A', 'B', 1, 2,__func));
}
//
//////////////////////////////////////////////////////////////////////////////
 
 
 

 }
});

