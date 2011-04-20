// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.1_A1_T1;
* @section: 15.11.1, 16;
* @assertion: The function call Error(...) is equivalent to the object creation expression new 
* Error(...) with the same arguments;
* @description: Checking constructor of the newly constructed Error object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.1_A1_T1",

path: "15_Native\15.11_Error_Objects\15.11.1_The_Error_Constructor_Called_as_a_Function\S15.11.1_A1_T1.js",

assertion: "The function call Error(...) is equivalent to the object creation expression new",

description: "Checking constructor of the newly constructed Error object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
Error.prototype.toString=Object.prototype.toString;
var err1=Error();
if(err1.constructor!==Error){
  $ERROR('#1: Error.prototype.toString=Object.prototype.toString; var err1=Error(); err1.constructor===Error. Actual: '+err1.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

