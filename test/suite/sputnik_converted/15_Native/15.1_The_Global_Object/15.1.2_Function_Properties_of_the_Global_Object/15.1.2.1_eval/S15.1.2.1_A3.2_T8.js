// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A3.2_T8;
 * @section: 15.1.2.1, 12.6.3;
 * @assertion: If Result(3).type is normal and its completion value is empty, 
 * then return the value undefined; 
 * @description: for statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A3.2_T8",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.1_eval\S15.1.2.1_A3.2_T8.js",

assertion: "If Result(3).type is normal and its completion value is empty,",

description: "for statement",

test: function testcase() {
   //CHECK#1
if (eval("for(false;false;false);") !== undefined) {
  $ERROR('#1: eval("for(false;false;false);") === undefined. Actual: ' + (eval("for(false;false;false);")));
}    

 }
});

