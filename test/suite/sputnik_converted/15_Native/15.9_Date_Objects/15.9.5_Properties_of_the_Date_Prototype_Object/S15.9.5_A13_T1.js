// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5_A13_T1;
 * @section: 15.9.5;
 * @assertion: The Date.prototype has the property "getUTCMonth";
 * @description: The Date.prototype has the property "getUTCMonth";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5_A13_T1",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\S15.9.5_A13_T1.js",

assertion: "The Date.prototype has the property \"getUTCMonth\"",

description: "The Date.prototype has the property \"getUTCMonth\"",

test: function testcase() {
   if(Date.prototype.hasOwnProperty("getUTCMonth") !== true){
  $ERROR('#1: The Date.prototype has the property "getUTCMonth"');
}


 }
});

