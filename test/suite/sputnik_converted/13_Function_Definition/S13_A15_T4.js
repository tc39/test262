// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A15_T4;
* @section: 13;
* @assertion: ''arguments'' variable overrides ActivationObject.arguments;
* @description: Declaring a variable named with "arguments" and following a "return" statement within a function body;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A15_T4",

path: "13.0",

description: "Declaring a variable named with \"arguments\" and following a \"return\" statement within a function body",

test: function testcase() {
   THE_ANSWER="Answer to Life, the Universe, and Everything";

function __func(){
    return typeof arguments;
    var arguments = THE_ANSWER;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(42,42,42) !== "object") {
	$ERROR('#1: __func(42,42,42) === "object". Actual: __func(42,42,42)==='+__func(42,42,42));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

