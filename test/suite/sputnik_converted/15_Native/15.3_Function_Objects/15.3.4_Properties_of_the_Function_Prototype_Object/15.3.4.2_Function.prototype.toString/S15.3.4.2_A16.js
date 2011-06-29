// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.2_A16;
* @section: 15.3.4.2;
* @assertion: The toString function is not generic; it throws a TypeError exception if its this value is not a Function object.
* @description: The String constructor, given an object, should invoke that object's toString method as a method, i.e., with its this value bound to that object.
* @negative TypeError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.2_A16",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.2_Function.prototype.toString/S15.3.4.2_A16.js",

assertion: "The toString function is not generic; it throws a TypeError exception if its this value is not a Function object.",

description: "The String constructor, given an object, should invoke that object\'s toString method as a method, i.e., with its this value bound to that object.",

test: function testcase() {
   var obj = {toString: Function.prototype.toString};

String(obj);

 }
});

