// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5.2_A1_T1;
* @section: 15.3.5.2;
* @assertion: the prototype property has the attributes { DontDelete };
* @description: Checking if deleting the prototype property of Function("", null) fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.2_A1_T1",

path: "15_Native\15.3_Function_Objects\15.3.5_Properties_of_Function_Instances\S15.3.5.2_A1_T1.js",

assertion: "the prototype property has the attributes { DontDelete }",

description: "Checking if deleting the prototype property of Function(\"\", null) fails",

test: function testcase() {
   f = new Function("", null);

//CHECK#1
if (!(f.hasOwnProperty('prototype'))) {
  $FAIL('#1: the function has length property.');
}

fproto = f.prototype;

//CHECK#2
if (delete f.prototype) {
  $ERROR('#2: the prototype property has the attributes { DontDelete }');
}

//CHECK#3
if (f.prototype !== fproto) {
  $ERROR('#3: the prototype property has the attributes { DontDelete }');
}

 }
});

