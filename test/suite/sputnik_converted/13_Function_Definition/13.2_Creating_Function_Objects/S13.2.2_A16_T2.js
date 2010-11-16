// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A16_T2;
* @section: 13.2.2;
* @assertion: FunctionExpression within a new statement is admitted;
* @description: Using "var __obj = new function __func(arg){this.prop=arg;}(5)" as FunctionExpression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A16_T2",

path: "13.2.2",

description: "Using \"var __obj = new function __func(arg){this.prop=arg;}(5)\" as FunctionExpression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof S13_2_2_A16_T2_func !== "undefined") {
    $ERROR('#1: typeof S13_2_2_A16_T2_func === "undefined". Actual: typeof S13_2_2_A16_T2_func ===' + typeof S13_2_2_A16_T2_func);
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = new function S13_2_2_A16_T2_func(arg) { this.prop = arg; } (5);

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.prop !== 5) {
	$ERROR('#2: __obj.prop === 5. Actual: __obj.prop ==='+__obj.prop);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof S13_2_2_A16_T2_func !== "undefined") {
    $ERROR('#3: typeof S13_2_2_A16_T2_func === "undefined". Actual: typeof S13_2_2_A16_T2_func ===' + typeof __func);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

