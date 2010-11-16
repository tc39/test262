// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5_A38_T1;
 * @section: 15.9.5;
 * @assertion: The Date.prototype has the property "setMonth";
 * @description: The Date.prototype has the property "setMonth";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5_A38_T1",

path: "15.9.5",

description: "The Date.prototype has the property \"setMonth\"",

test: function testcase() {
   if(Date.prototype.hasOwnProperty("setMonth") !== true){
  $ERROR('#1: The Date.prototype has the property "setMonth"');
}


 }
});

