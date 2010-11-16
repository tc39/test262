// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A2_T3;
* @section: 13;
* @assertion: function must be evaluated inside the expression;
* @description: Defining function body with "return arguments[0] +"-"+ arguments[1]";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A2_T3",

path: "13",

description: "Defining function body with \"return arguments[0] +\"-\"+ arguments[1]\"",

test: function testcase() {
   var x = (function S13_A2_T3_func() { return arguments[0] + "-" + arguments[1] })("Obi", "Wan");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x !== "Obi-Wan") {
	$ERROR('#1: x === "Obi-Wan". Actual: x ==='+x);
}

//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof S13_A2_T3_func !== 'undefined') {
    $ERROR('#2: typeof S13_A2_T3_func === \'undefined\'. Actual: typeof S13_A2_T3_func ===' + typeof S13_A2_T3_func);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

