// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.1.2_A1_T2;
 * @section: 11.1.2;
 * @assertion: The result of evaluating an Identifier is always a value of type Reference;
 * @description: Trying to generate ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.2_A1_T2",

path: "11_Expressions\11.1_Primary_Expressions\11.1.2_Identifier_Reference\S11.1.2_A1_T2.js",

assertion: "The result of evaluating an Identifier is always a value of type Reference",

description: "Trying to generate ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  this.z;
  z;
  $ERROR('#1.1: this.z; z === undefined throw ReferenceError. Actual: ' + (z));
} catch(e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: this.z; z === undefined throw ReferenceError. Actual: ' + (e));
  }
}

 }
});

