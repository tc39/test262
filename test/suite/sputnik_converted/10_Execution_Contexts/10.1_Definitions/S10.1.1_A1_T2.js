// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.1_A1_T2;
 * @section: 10.1.1;
 * @assertion: Program functions are defined in source text by a FunctionDeclaration or created dynamically either  
 * by using a FunctionExpression or by using the built-in Function object as a constructor;
 * @description: Creating function dynamically by using a FunctionExpression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.1_A1_T2",

path: "10_Execution_Contexts\10.1_Definitions\S10.1.1_A1_T2.js",

assertion: "Program functions are defined in source text by a FunctionDeclaration or created dynamically either",

description: "Creating function dynamically by using a FunctionExpression",

test: function testcase() {
   //CHECK#1
var x=function f1(){return 1;}();
if(x!==1)
  $ERROR('#1: Create function dynamically either by using a FunctionExpression');

//CHECK#2
var y=function  (){return 2;}();
if(y!==2){
  $ERROR('#2: Create an anonymous function dynamically either by using a FunctionExpression');
}

//CHECK#2
var z = (function(){return 3;})();
if(z!==3){
  $ERROR('#3: Create an anonymous function dynamically either by using a FunctionExpression wrapped in a group operator');
}

 }
});

