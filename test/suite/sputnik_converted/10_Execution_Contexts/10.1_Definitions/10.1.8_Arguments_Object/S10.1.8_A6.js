// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.8_A6;
 * @section: 10.1.8;
 * @assertion: The initial value of the created property length is the number 
 * of actual parameter values supplied by the caller;
 * @description: Create function, that returned arguments.length;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.8_A6",

path: "10_Execution_Contexts\10.1_Definitions\10.1.8_Arguments_Object\S10.1.8_A6.js",

assertion: "The initial value of the created property length is the number",

description: "Create function, that returned arguments.length",

test: function testcase() {
   function f1(){
  return arguments.length;
}

//CHECK#1
if(!(f1() === 0)){
  $ERROR('#1: argument.length === 0');
}

//CHECK#2
if(!(f1(0) === 1)){
  $ERROR('#2: argument.length === 1');
}

//CHECK#3
if(!(f1(0, 1) === 2)){
  $ERROR('#3: argument.length === 2');
}

//CHECK#4
if(!(f1(0, 1, 2) === 3)){
  $ERROR('#4: argument.length === 3');
}

//CHECK#5
if(!(f1(0, 1, 2, 3) === 4)){
  $ERROR('#5: argument.length === 4');
}

var f2 = function(){return arguments.length;};

//CHECK#6
if(!(f2() === 0)){
  $ERROR('#6: argument.length === 0');
}

//CHECK#7
if(!(f2(0) === 1)){
  $ERROR('#7: argument.length === 1');
}

//CHECK#8
if(!(f2(0, 1) === 2)){
  $ERROR('#8: argument.length === 2');
}

//CHECK#9
if(!(f2(0, 1, 2) === 3)){
  $ERROR('#9: argument.length === 3');
}

//CHECK#10
if(!(f2(0, 1, 2, 3) === 4)){
  $ERROR('#10: argument.length === 4');
}

 }
});

