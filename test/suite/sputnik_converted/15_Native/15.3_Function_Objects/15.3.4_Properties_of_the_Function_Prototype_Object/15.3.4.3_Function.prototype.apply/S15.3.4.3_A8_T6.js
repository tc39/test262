// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A8_T6;
* @section: 15.3.4.3;
* @assertion: Function.prototype.apply can`t be used as [[create]] caller;
* @description: Checking if creating "new (Function("function f(){this.p1=1;};return f").apply())" fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A8_T6",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.3_Function.prototype.apply\S15.3.4.3_A8_T6.js",

assertion: "Function.prototype.apply can`t be used as [[create]] caller",

description: "Checking if creating \"new (Function(\"function f(){this.p1=1;};return f\").apply())\" fails",

test: function testcase() {
   //CHECK#1
try {
  obj = new (Function("function f(){this.p1=1;};return f").apply());
} catch (e) {
  $ERROR('#1: Function.prototype.apply can\'t be used as [[create]] caller');
}

//CHECK#2
if (obj.p1!== 1) {
  $ERROR('#2: Function.prototype.apply can\'t be used as [[create]] caller');
}

 }
});

