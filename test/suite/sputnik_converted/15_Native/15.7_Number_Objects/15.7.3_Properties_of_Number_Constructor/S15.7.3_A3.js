// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3_A3;
 * @section: 15.7.3;
 * @assertion: The Number constructor has the property "MIN_VALUE";
 * @description: Checking existence of the property "MIN_VALUE";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3_A3",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\S15.7.3_A3.js",

assertion: "The Number constructor has the property \"MIN_VALUE\"",

description: "Checking existence of the property \"MIN_VALUE\"",

test: function testcase() {
   if(!Number.hasOwnProperty("MIN_VALUE")){
  $ERROR('#1: The Number constructor has the property "MIN_VALUE"');
}


 }
});

