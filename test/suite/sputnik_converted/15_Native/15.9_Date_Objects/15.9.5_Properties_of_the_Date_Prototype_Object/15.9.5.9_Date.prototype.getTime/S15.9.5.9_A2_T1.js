// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.9_A2_T1;
 * @section: 15.9.5.9;
 * @assertion: The "length" property of the "getTime" is 0;
 * @description: The "length" property of the "getTime" is 0;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.9_A2_T1",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.9_Date.prototype.getTime\S15.9.5.9_A2_T1.js",

assertion: "The \"length\" property of the \"getTime\" is 0",

description: "The \"length\" property of the \"getTime\" is 0",

test: function testcase() {
   if(Date.prototype.getTime.hasOwnProperty("length") !== true){
  $ERROR('#1: The getTime has a "length" property');
}

if(Date.prototype.getTime.length !== 0){
  $ERROR('#2: The "length" property of the getTime is 0');
}


 }
});

