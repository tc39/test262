// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A15_T1;
* @section: 13;
* @assertion: ''arguments'' variable overrides ActivationObject.arguments;
* @description: Declaring a function with "__func(arguments)"; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A15_T1",

path: "13_Function_Definition\13.0_Chapter\S13.0_A15_T1.js",

assertion: "\'\'arguments\'\' variable overrides ActivationObject.arguments",

description: "Declaring a function with \"__func(arguments)\"",

test: function testcase() {
   function __func(arguments){
    return arguments;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(42) !== 42) {
	$ERROR('#1: "arguments" variable overrides ActivationObject.arguments');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

