// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A8;
* @section: 15.5.4.17;
* @assertion: The String.prototype.toLocaleLowerCase.length property has the attribute DontEnum;
* @description: Checking if enumerating the String.prototype.toLocaleLowerCase.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A8",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.17_String.prototype.toLocaleLowerCase\S15.5.4.17_A8.js",

assertion: "The String.prototype.toLocaleLowerCase.length property has the attribute DontEnum",

description: "Checking if enumerating the String.prototype.toLocaleLowerCase.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.toLocaleLowerCase.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.toLocaleLowerCase.propertyIsEnumerable(\'length\') return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (var p in String.prototype.toLocaleLowerCase){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.toLocaleLowerCase){if (p==="length") count++;}; count === 0. Actual: '+count );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

