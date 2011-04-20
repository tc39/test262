// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.3.1_A1;
 * @section: 15.6.3.1;
 * @assertion: The initial value of Boolean.prototype is the Boolean 
 * prototype object;
 * @description: Checking Boolean.prototype property;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.3.1_A1",

path: "15_Native\15.6_Boolean_Objects\15.6.3_Properties_of_the_Boolean_Constructor\15.6.3.1_Boolean.prototype\S15.6.3.1_A1.js",

assertion: "The initial value of Boolean.prototype is the Boolean",

description: "Checking Boolean.prototype property",

test: function testcase() {
   //CHECK#1
if (typeof Boolean.prototype !== "object") {
  $ERROR('#1: typeof Boolean.prototype === "object"');
}

//CHECK#2
if (Boolean.prototype != false) {
  $ERROR('#2: Boolean.prototype == false');
}

delete Boolean.prototype.toString;

if (Boolean.prototype.toString() !== "[object Boolean]") {
  $ERROR('#3: The [[Class]] property of the Boolean prototype object is set to "Boolean"');
}

 }
});

