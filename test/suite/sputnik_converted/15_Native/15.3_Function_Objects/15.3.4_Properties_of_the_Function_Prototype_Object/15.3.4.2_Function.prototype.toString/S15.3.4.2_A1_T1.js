// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.2_A1_T1;
* @section: 15.3.4.2;
* @assertion: An implementation-dependent representation of the function is returned. This representation has the syntax of a FunctionDeclaration;
* @description: For testing use Function.prototype.toString() function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.2_A1_T1",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.2_Function.prototype.toString\S15.3.4.2_A1_T1.js",

assertion: "An implementation-dependent representation of the function is returned. This representation has the syntax of a FunctionDeclaration",

description: "For testing use Function.prototype.toString() function",

test: function testcase() {
   f = function(x) {
  return x*x;
}

//CHECK#1
if (eval(f.toString())(10) !== f(10)) {
  $ERROR('#1: An implementation-dependent representation of the function is returned. This representation has the syntax of a FunctionDeclaration');
}

 }
});

