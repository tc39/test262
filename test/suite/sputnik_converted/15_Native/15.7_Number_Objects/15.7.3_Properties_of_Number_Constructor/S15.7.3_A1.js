// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3_A1;
 * @section: 15.7.3;
 * @assertion: The Number constructor has the property "prototype";
 * @description: Checking existence of the property "prototype";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3_A1",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\S15.7.3_A1.js",

assertion: "The Number constructor has the property \"prototype\"",

description: "Checking existence of the property \"prototype\"",

test: function testcase() {
   if(!Number.hasOwnProperty("prototype")){
  $ERROR('#1: The Number constructor has the property "prototype"');
}


 }
});

