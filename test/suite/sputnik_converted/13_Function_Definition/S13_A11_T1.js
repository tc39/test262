// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A11_T1;
* @section: 13;
* @assertion: Since arguments property has attribute { DontDelete }, only its elements can be deleted;
* @description: Returning result of "delete arguments";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A11_T1",

path: "13.0",

description: "Returning result of \"delete arguments\"",

test: function testcase() {
   function __func(){ return delete arguments;}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func("A","B",1,2)) {
	$ERROR('#1: arguments property has attribute { DontDelete }');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

