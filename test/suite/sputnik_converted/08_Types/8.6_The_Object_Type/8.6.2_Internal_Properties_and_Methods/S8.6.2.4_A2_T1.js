// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.4_A2_T1;
* @section: 8.6.2.4, 12.6.4;
* @assertion: When the [[HasProperty]] method of O is called with property name P and if O has not a property with name P 
* then If the [[Prototype]] of O is null, return false or call the [[HasProperty]] method of [[Prototype]] with property name P;
* @description: Try find not existent property of any Object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.4_A2_T1",

path: "08_Types\8.6_The_Object_Type\8.6.2_Internal_Properties_and_Methods\S8.6.2.4_A2_T1.js",

assertion: "When the [[HasProperty]] method of O is called with property name P and if O has not a property with name P",

description: "Try find not existent property of any Object",

test: function testcase() {
   var __obj={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!("valueOf" in __obj)) {
  $ERROR('#1: var __obj={}; "valueOf" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

