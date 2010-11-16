// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.1_A1_T1;
 * @section: 10.1.1;
 * @assertion: Program functions are defined in source text by a FunctionDeclaration or created dynamically either  
 * by using a FunctionExpression or by using the built-in Function object as a constructor;
 * @description: Defining function by a FunctionDeclaration;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.1_A1_T1",

path: "10.1.1",

description: "Defining function by a FunctionDeclaration",

test: function testcase() {
   //CHECK#1
function f1(){
  return 1;
}
if(typeof(f1)!=="function")
  $ERROR('#1: typeof(f1)!=="function"');

 }
});

