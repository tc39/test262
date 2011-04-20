// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.3_A4_T1;
 * @section: 10.1.3;
 * @assertion: Function declaration in function code - If the variable object 
 * already has a property with the name of Function Identifier, replace its 
 * value and attributes. Semantically, this step must follow the creation of 
 * FormalParameterList properties;
 * @description: Checking existence of a function with passed parameter;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.3_A4_T1",

path: "10_Execution_Contexts\10.1_Definitions\10.1.3_Variable_Instantiation\S10.1.3_A4_T1.js",

assertion: "Function declaration in function code - If the variable object",

description: "Checking existence of a function with passed parameter",

test: function testcase() {
   //CHECK#1
function f1(x){
  return x;
  
  function x(){
    return 7;
  }
}
if(!(f1().constructor.prototype === Function.prototype)){
  $ERROR('#1: f1() returns function');
}

//CHECK#2
function f2(x){
  return typeof x;
  
  function x(){
    return 7;
  }
}
if(!(f2() === "function")){
  $ERROR('#2: f2() === "function"');
}

//CHECK#3
function f3() {
  return typeof arguments;
  function arguments() {
    return 7;
  }
}
if (!(f3() === "function")){
  $ERROR('#3: f3() === "function"');
}

 }
});

