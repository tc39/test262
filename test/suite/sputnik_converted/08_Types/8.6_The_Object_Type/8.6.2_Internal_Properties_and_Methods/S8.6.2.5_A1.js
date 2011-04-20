// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.5_A1;
* @section: 8.6.2.5, 15.8, 11.4.1;
* @assertion: When the [[Delete]] method of O is called with property name P, 
* and If the property has the DontDelete attribute, return false;
* @description: Try to delete Math.E, that has the DontDelete attribute;  
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.5_A1",

path: "08_Types\8.6_The_Object_Type\8.6.2_Internal_Properties_and_Methods\S8.6.2.5_A1.js",

assertion: "When the [[Delete]] method of O is called with property name P,",

description: "Try to delete Math.E, that has the DontDelete attribute",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete Math.E !== false){
  $ERROR('#1: delete Math.E === false. Actual: ' + (delete Math.E));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (Math.E === undefined){
  $ERROR('#2: delete Math.E; Math.E !== undefined');
};
//
//////////////////////////////////////////////////////////////////////////////


 }
});

