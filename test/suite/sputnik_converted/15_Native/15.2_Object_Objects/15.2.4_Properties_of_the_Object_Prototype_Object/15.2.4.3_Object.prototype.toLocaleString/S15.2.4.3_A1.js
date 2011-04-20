// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.3_A1;
* @section: 15.2.4.3;
* @assertion: toLocaleString function returns the result of calling toString();
* @description: Checking the type of Object.prototype.toLocaleString and the returned result;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.3_A1",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.3_Object.prototype.toLocaleString\S15.2.4.3_A1.js",

assertion: "toLocaleString function returns the result of calling toString()",

description: "Checking the type of Object.prototype.toLocaleString and the returned result",

test: function testcase() {
   //CHECK#1
if (typeof Object.prototype.toLocaleString !== "function") {
  $ERROR('#1: toLocaleString method defined');
}

//CHECK#2
if (Object.prototype.toLocaleString() !== Object.prototype.toString()) {
  $ERROR('#1: toLocaleString function returns the result of calling toString()');
}

//CHECK#2
if ({}.toLocaleString()!=={}.toString()) {
  $ERROR('#2: toLocaleString function returns the result of calling toString()');
}

 }
});

