// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.1_A1_T3;
 * @section: 10.1.1;
 * @assertion: Program functions are defined in source text by a FunctionDeclaration or created dynamically either  
 * by using a FunctionExpression or by using the built-in Function object as a constructor;
 * @description: Creating function dynamically by using the built-in Function object as a constructor;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.1_A1_T3",

path: "10_Execution_Contexts\10.1_Definitions\S10.1.1_A1_T3.js",

assertion: "Program functions are defined in source text by a FunctionDeclaration or created dynamically either",

description: "Creating function dynamically by using the built-in Function object as a constructor",

test: function testcase() {
   //CHECK#1
var x=new function f1(){return 1;};
if(typeof(x.constructor)!=="function")
  $ERROR('#1: typeof(x.constructor)!=="function"');

 }
});

