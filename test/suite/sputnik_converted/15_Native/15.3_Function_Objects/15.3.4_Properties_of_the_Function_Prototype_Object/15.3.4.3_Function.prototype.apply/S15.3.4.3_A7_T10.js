// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A7_T10;
* @section: 15.3.4.3;
* @assertion: If argArray is either an array or an arguments object, 
* the function is passed the (ToUint32(argArray.length)) arguments argArray[0], argArray[1],...,argArray[ToUint32(argArray.length)-1];
* @description: argArray is (empty object, arguments), inside function call without declaration used;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A7_T10",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.3_Function.prototype.apply\S15.3.4.3_A7_T10.js",

assertion: "If argArray is either an array or an arguments object,",

description: "argArray is (empty object, arguments), inside function call without declaration used",

test: function testcase() {
   var obj={};

(function (){
  Function("a1,a2,a3","this.shifted=a1+a2+a3;").apply(obj,arguments);
})("",4,2);

//CHECK#1
if (obj["shifted"] !== "42") {
  $ERROR('#1: If argArray is either an array or an arguments object, the function is passed the...');
}

//CHECK#2
if (typeof this["shifted"] !== "undefined") {
  $ERROR('#2: If argArray is either an array or an arguments object, the function is passed the...');
}


 }
});

