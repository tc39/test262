// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
  * @name: S11.8.4_A3.1_T2.3;
  * @section: 11.8.4;
  * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y); 
  * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Number (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.4_A3.1_T2.3",

path: "11_Expressions\11.8_Relational_Operators\11.8.4_The_Grater_than_or_equal_Operator\S11.8.4_A3.1_T2.3.js",

assertion: "If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y)",

description: "Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Number (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
if (1 >= null !== true) {
  $ERROR('#1: 1 >= null === true');
}

//CHECK#2
if (null >= 1 !== false) {
  $ERROR('#2: null >= 1 === false');
}

//CHECK#3
if (new Number(1) >= null !== true) {
  $ERROR('#3: new Number(1) >= null === true');
}

//CHECK#4
if (null >= new Number(1) !== false) {
  $ERROR('#4: null >= new Number(1) === false');
}

 }
});

