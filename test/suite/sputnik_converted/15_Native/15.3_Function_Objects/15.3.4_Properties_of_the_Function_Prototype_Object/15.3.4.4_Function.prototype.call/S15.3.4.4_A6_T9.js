// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A6_T9;
* @section: 15.3.4.4;
* @assertion: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
* a function call using the [[Call]] property of the object;
* @description: Argunemts of call function is (empty object, "", arguments,2), inside function declaration used;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A6_T9",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.4_Function.prototype.call\S15.3.4.4_A6_T9.js",

assertion: "The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs",

description: "Argunemts of call function is (empty object, \"\", arguments,2), inside function declaration used",

test: function testcase() {
   function FACTORY(){
  var obj = {};
  Function("a1,a2,a3","this.shifted=a1+a2.length+a3;").call(obj,"",arguments,2);
  return obj;
}

var obj=new FACTORY("",1,2,void 0);

//CHECK#1
if (typeof this["shifted"] !== "undefined") {
  $ERROR('#1: If argArray is either an array or an arguments object, the function is passed the...');
}

//CHECK#2
if (obj.shifted !== "42") {
  $ERROR('#2: If argArray is either an array or an arguments object, the function is passed the...');
}


 }
});

