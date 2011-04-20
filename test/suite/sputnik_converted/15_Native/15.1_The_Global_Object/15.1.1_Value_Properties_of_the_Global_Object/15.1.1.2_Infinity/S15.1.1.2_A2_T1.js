// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.2_A2_T1;
 * @section: 15.1.1.2, 15.5.1, 15.6.1, 15.7.1;
 * @assertion: The Infinity is not ReadOnly;
 * @description: Checking Boolean, Number, String Functions; 
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.2_A2_T1",

path: "15_Native\15.1_The_Global_Object\15.1.1_Value_Properties_of_the_Global_Object\15.1.1.2_Infinity\S15.1.1.2_A2_T1.js",

assertion: "The Infinity is not ReadOnly",

description: "Checking Boolean, Number, String Functions",

test: function testcase() {
   // CHECK#1
Infinity = 0;
if (Boolean(Infinity) !== false) {
	$ERROR('#1: Infinity = 0; Boolean(Infinity) === false. Actual: ' + (Boolean(Infinity))); 
}

// CHECK#2
Infinity = false;
if (Number(Infinity) !== 0) {
	$ERROR('#2: Infinity = false; Number(Infinity) === 0. Actual: ' + (Number(Infinity))); 
}

// CHECK#3
Infinity = 0;
if (String(Infinity) !== "0") {
	$ERROR('#3: Infinity = 0; String(Infinity) === "0". Actual: ' + (String(Infinity))); 
}


 }
});

