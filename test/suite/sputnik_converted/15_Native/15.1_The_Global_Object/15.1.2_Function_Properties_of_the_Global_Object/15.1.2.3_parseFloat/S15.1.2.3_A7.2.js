// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A7.2;
 * @section: 15.1.2.3, 15.2.4.5, 11.4.1;
 * @assertion: The length property of parseFloat has the attribute DontDelete;
 * @description: Checking use hasOwnProperty, delete;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A7.2",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.3_parseFloat\S15.1.2.3_A7.2.js",

assertion: "The length property of parseFloat has the attribute DontDelete",

description: "Checking use hasOwnProperty, delete",

test: function testcase() {
   //CHECK#1
if (parseFloat.hasOwnProperty('length') !== true) {
  $FAIL('#1: parseFloat.hasOwnProperty(\'length\') === true. Actual: ' + (parseFloat.hasOwnProperty('length')));
}

delete parseFloat.length;

//CHECK#2
if (parseFloat.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete parseFloat.length; parseFloat.hasOwnProperty(\'length\') === true. Actual: ' + (parseFloat.hasOwnProperty('length')));
}

//CHECK#3
if (parseFloat.length === undefined) {
  $ERROR('#3: delete parseFloat.length; parseFloat.length !== undefined');
}

 }
});

