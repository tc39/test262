// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.2.1_A4;
 * @section: 15.6.2.1;
 * @assertion: The [[Class]] property of the newly constructed object 
 * is set to "Boolean";
 * @description: For testing toString function is used;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.2.1_A4",

path: "15_Native\15.6_Boolean_Objects\15.6.2_The_Boolean_Constructor\S15.6.2.1_A4.js",

assertion: "The [[Class]] property of the newly constructed object",

description: "For testing toString function is used",

test: function testcase() {
   delete Boolean.prototype.toString;

var obj = new Boolean();

//CHECK#1
if (obj.toString() !== "[object Boolean]") {
  $ERROR('#1: The [[Class]] property of the newly constructed object is set to "Boolean"');
}

 }
});

