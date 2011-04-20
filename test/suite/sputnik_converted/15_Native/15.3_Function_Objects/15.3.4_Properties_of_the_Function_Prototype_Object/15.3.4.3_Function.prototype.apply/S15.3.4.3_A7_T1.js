// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A7_T1;
* @section: 15.3.4.3;
* @assertion: If argArray is either an array or an arguments object, 
* the function is passed the (ToUint32(argArray.length)) arguments argArray[0], argArray[1],...,argArray[ToUint32(argArray.length)-1];
* @description: argArray is (null,[1]);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A7_T1",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.3_Function.prototype.apply\S15.3.4.3_A7_T1.js",

assertion: "If argArray is either an array or an arguments object,",

description: "argArray is (null,[1])",

test: function testcase() {
   Function("a1,a2,a3","this.shifted=a1;").apply(null,[1]);

//CHECK#1
if (this["shifted"] !== 1) {
  $ERROR('#1: If argArray is either an array or an arguments object, the function is passed the...');
}


 }
});

