// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.7_A3_T1;
* @section: 15.10.7;
* @assertion: RegExp instance type is RegExp;
* @description: Checking type of RegExp instance with operators typeof, instanceof and check it constructor. 
* RegExp instance is /[^a]* /;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.7_A3_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.7_Properties_of_RegExp_Instances\S15.10.7_A3_T1.js",

assertion: "RegExp instance type is RegExp",

description: "Checking type of RegExp instance with operators typeof, instanceof and check it constructor.",

test: function testcase() {
   __re = /[^a]*/;

//CHECK#1
if (typeof __re !== "object") {
	$ERROR('#1: __re = /[^a]*/; typeof __re === "object". Actual: ' + (typeof __re));
}

//CHECK#1
if (__re.constructor !== RegExp) {
	$ERROR('#2: __re = /[^a]*/; __re.constructor === RegExp. Actual: ' + (__re.constructor));
}

//CHECK#3
if ((__re instanceof RegExp) !== true) {
	$ERROR('#3: __re = /[^a]*/; (__re instanceof RegExp) === true');
}


 }
});

