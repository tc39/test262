// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A4_T3;
* @section: 11.8.6;
* @assertion: Only constructor call (with "new" keyword) makes instance;
* @description: Checking String case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A4_T3",

path: "11_Expressions\11.8_Relational_Operators\11.8.6_The_instanceof_operator\S11.8.6_A4_T3.js",

assertion: "Only constructor call (with \"new\" keyword) makes instance",

description: "Checking String case",

test: function testcase() {
   //CHECK#1
if ("" instanceof String) {
	$ERROR('#1: "" is not instanceof String');
}

//CHECK#2
if (String("") instanceof String) {
	$ERROR('#2: String("") is not instanceof String');
}

//CHECK#3
if (new String instanceof String !== true) {
	$ERROR('#3: new String instanceof String');
}

 }
});

