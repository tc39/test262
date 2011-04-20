// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4_A3;
 * @section: 15.9.4;
 * @assertion: The Date constructor has the property "UTC";
 * @description: Checking existence of the property "UTC";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4_A3",

path: "15_Native\15.9_Date_Objects\15.9.4_Properties_of_the_Date_Constructor\S15.9.4_A3.js",

assertion: "The Date constructor has the property \"UTC\"",

description: "Checking existence of the property \"UTC\"",

test: function testcase() {
   if(!Date.hasOwnProperty("UTC")){
  $ERROR('#1: The Date constructor has the property "UTC"');
}


 }
});

