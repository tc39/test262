// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A6_T1;
* @section: 15.3.4.3;
* @assertion: if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown;
* @description: argArray is (1,{});
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A6_T1",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.3_Function.prototype.apply\S15.3.4.3_A6_T1.js",

assertion: "if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown",

description: "argArray is (1,{})",

test: function testcase() {
   //CHECK#1
try {
  Function().apply(1,{});
  $FAIL('#1: if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown');
  }
}

 }
});

