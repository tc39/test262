// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5.3_A1_T6;
* @section: 15.3.5.3, 11.8.6;
* @assertion: Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false;
* @description: V is null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.3_A1_T6",

path: "15_Native\15.3_Function_Objects\15.3.5_Properties_of_Function_Instances\S15.3.5.3_A1_T6.js",

assertion: "Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false",

description: "V is null",

test: function testcase() {
   FACTORY = Function("name","this.name=name;");

//CHECK#1
if ((null instanceof  FACTORY)!==false) {
  $ERROR('#1: Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false');
}

 }
});

