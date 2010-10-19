// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.3_A5.2_T1;
 * @section: 10.1.3;
 * @assertion: If there is already a property of the variable object with the 
 * name of a declared variable, the value of the property and its attributes 
 * are not changed;
 * @description: Checking existence of the variable object property with formal parameter;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.3_A5.2_T1",

path: "10.1.3",

description: "Checking existence of the variable object property with formal parameter",

test: function testcase() {
   //CHECK#1
function f1(x){
  var x;
  
  return typeof x;
}

if(!(f1(1) === "number")){
  $PRINT('#1: f1(1) === "number"');
}

//CHECK#2
function f2(x){
  var x;
  
  return x;
}

if(!(f2(1) === 1)){
  $PRINT('#1: f2(1) === 1');
}

 }
});

