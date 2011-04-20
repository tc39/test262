// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A6_T3;
* @section: 15.3.4.4;
* @assertion: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
* a function call using the [[Call]] property of the object;
* @description: Argunemts of call function is (empty object, new Array("nine","inch","nails"));
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A6_T3",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.4_Function.prototype.call\S15.3.4.4_A6_T3.js",

assertion: "The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs",

description: "Argunemts of call function is (empty object, new Array(\"nine\",\"inch\",\"nails\"))",

test: function testcase() {
   var i=0;

var p={toString:function(){return "a"+(++i);}};

var obj={};

Function(p,"a2,a3","this.shifted=a1;").call(obj, new Array("nine","inch","nails"));

//CHECK#1
if (obj["shifted"].length !== 3) {
  $ERROR('#1: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}

//CHECK#2
if ((obj["shifted"][0] !== "nine")||(obj["shifted"][1] !== "inch")||(obj["shifted"][2] !== "nails")) {
  $ERROR('#2: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}

//CHECK#3
if (typeof this["shifted"] !== "undefined") {
  $ERROR('#3: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}


 }
});

