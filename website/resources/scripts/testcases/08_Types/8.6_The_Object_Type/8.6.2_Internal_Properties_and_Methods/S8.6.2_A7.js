// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2_A7;
* @section: 8.6.2, 15.8;
* @assertion: Objects that implement internal method [[Construct]] are called constructors. Math object is NOT constructor;
* @description: Checking if execution of "var objMath=new Math" passes; 
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2_A7",

path: "8.6.2, 15.8",

description: "Checking if execution of \"var objMath=new Math\" passes",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nvar objMath=new Math;\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

