// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A3.3_T4;
 * @section: 15.1.2.1, 12.13;
 * @assertion: If Result(3).type is not normal, then Result(3).type must be throw.
 * Throw Result(3).value as an exception; 
 * @description: Throw statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A3.3_T4",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.1_eval\S15.1.2.1_A3.3_T4.js",

assertion: "If Result(3).type is not normal, then Result(3).type must be throw.",

description: "Throw statement",

test: function testcase() {
   //CHECK#1
try {
  eval("throw 1;");
  $ERROR('#1.1: throw 1 must throw SyntaxError. Actual: ' + (eval("throw 1;")));
} catch(e) {
  if (e !== 1) {
    $ERROR('#1.2: throw 1 must throw SyntaxError. Actual: ' + (e));
  }  
}

 }
});

