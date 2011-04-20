// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.38_A2_T1;
 * @section: 15.9.5.38;
 * @assertion: The "length" property of the "setMonth" is 2;
 * @description: The "length" property of the "setMonth" is 2;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.38_A2_T1",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.38_Date.prototype.setMonth\S15.9.5.38_A2_T1.js",

assertion: "The \"length\" property of the \"setMonth\" is 2",

description: "The \"length\" property of the \"setMonth\" is 2",

test: function testcase() {
   if(Date.prototype.setMonth.hasOwnProperty("length") !== true){
  $ERROR('#1: The setMonth has a "length" property');
}

if(Date.prototype.setMonth.length !== 2){
  $ERROR('#2: The "length" property of the setMonth is 2');
}


 }
});

