// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A16_T3;
* @section: 13.2.2;
* @assertion: FunctionExpression within a new statement is admitted;
* @description: Using "is __obj = new function __func(arg){this.prop=arg; return {feat: ++arg}}(5)" as FunctionExpression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A16_T3",

path: "13.2.2",

description: "Using \"is __obj = new function __func(arg){this.prop=arg; return {feat: ++arg}}(5)\" as FunctionExpression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof S13_2_2_A16_T3_func !== "undefined") {
    $ERROR('#1: typeof S13_2_2_A16_T3_func === "undefined"');
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = new function S13_2_2_A16_T3_func(arg) { this.prop = arg; return { feat: ++arg} } (5);

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.prop !== undefined) {
	$ERROR('#2: __obj.prop === undefined. Actual: __obj.prop ==='+__obj.prop);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__obj.feat !== 6) {
	$ERROR('#3: __obj.feat === 6. Actual: __obj.feat ==='+__obj.feat);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (typeof S13_2_2_A16_T3_func !== "undefined") {
    $ERROR('#4: typeof S13_2_2_A16_T3_func === "undefined". Actual: typeof S13_2_2_A16_T3_func ===' + typeof S13_2_2_A16_T3_func);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

