// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5_A3_T1;
* @section: 15.3.5;
* @assertion: every function instance has a [[Construct]] property ;
* @description: As constructor use Function("var x =1; this.y=2;return \"OK\";");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5_A3_T1",

path: "15_Native\15.3_Function_Objects\15.3.5_Properties_of_Function_Instances\S15.3.5_A3_T1.js",

assertion: "every function instance has a [[Construct]] property",

description: "As constructor use Function(\"var x =1; this.y=2;return \\\"OK\\\";\")",

test: function testcase() {
   FACTORY = Function("var x =1; this.y=2;return \"OK\";");
obj = new FACTORY;

//CHECK#1
if (typeof obj !== "object") {
  $ERROR('#1: every function instance has a [[Construct]] property');
}

//CHECK#2
if (obj.constructor !== FACTORY) {
  $ERROR('#2: every function instance has a [[Construct]] property');
}

//CHECK#3
if (obj.y !== 2) {
  $ERROR('#3: every function instance has a [[Construct]] property');
}

 }
});

