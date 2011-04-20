// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A8;
* @section: 15.5.4.7;
* @assertion: The String.prototype.indexOf.length property has the attribute DontEnum;
* @description: Checking if enumerating the String.prototype.indexOf.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A8",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.7_String.prototype.indexOf\S15.5.4.7_A8.js",

assertion: "The String.prototype.indexOf.length property has the attribute DontEnum",

description: "Checking if enumerating the String.prototype.indexOf.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.indexOf.hasOwnProperty('length'))) {
  $ERROR('#0: String.prototype.indexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.indexOf.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.indexOf.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.indexOf.propertyIsEnumerable(\'length\') return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (p in String.prototype.indexOf){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.indexOf){if (p==="length") count++;}; count === 0. Actual: '+count ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

