// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.2.1_A3;
* @section: 15.5.2.1;
* @assertion: The [[Class]] property of the newly constructed object is set to "String";
* @description: Creating string object with "new String(string)" and changing toString property to Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.2.1_A3",

path: "15.5.2.1",

description: "Creating string object with \"new String(string)\" and changing toString property to Object.prototype.toString",

test: function testcase() {
   var __str__obj = new String("seamaid");

__str__obj.toString = Object.prototype.toString;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str__obj.toString() !== "[object "+"String"+"]") {
  $ERROR('#1: var __str__obj = new String("seamaid"); __str__obj.toString = Object.prototype.toString; __str__obj.toString() === "[object String]". Actual: __str__obj.toString() ==='+__str__obj.toString() ); 
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

