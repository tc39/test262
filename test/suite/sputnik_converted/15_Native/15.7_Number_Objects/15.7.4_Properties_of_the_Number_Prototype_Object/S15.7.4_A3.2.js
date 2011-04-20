// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.4_A3.2;
 * @section: 15.7.4;
 * @assertion: The Number prototype object has the property toString;
 * @description: The test uses hasOwnProperty() method;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.4_A3.2",

path: "15_Native\15.7_Number_Objects\15.7.4_Properties_of_the_Number_Prototype_Object\S15.7.4_A3.2.js",

assertion: "The Number prototype object has the property toString",

description: "The test uses hasOwnProperty() method",

test: function testcase() {
   //CHECK#1
if(Number.prototype.hasOwnProperty("toString") !== true){
  $ERROR('#1: The Number prototype object has the property toString');
}


 }
});

