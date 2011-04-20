// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.5_A1_T07;
 * @section: 15.7.5;
 * @assertion: Number instances have no special properties beyond those 
 * inherited from the Number prototype object;
 * @description: Checking property toPrecision;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.5_A1_T07",

path: "15_Native\15.7_Number_Objects\15.7.5_Properties_of_Number_Instances\S15.7.5_A1_T07.js",

assertion: "Number instances have no special properties beyond those",

description: "Checking property toPrecision",

test: function testcase() {
   //CHECK#1
if((new Number()).hasOwnProperty("toPrecision") !== false){
  $ERROR('#1: Number instance must have no special property "toPrecision"');
}

//CHECK#2
if((new Number()).toPrecision !== Number.prototype.toPrecision){
  $ERROR('#2: Number instance property "toPrecision" must be inherited from Number prototype object');
}


 }
});

