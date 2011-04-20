// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.1_A1_T2;
* @section: 15.2.4.1;
* @assertion: The initial value of Object.prototype.constructor is the built-in Object constructor;
* @description: Creating "new Object.prototype.constructor" and checking its properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.1_A1_T2",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\S15.2.4.1_A1_T2.js",

assertion: "The initial value of Object.prototype.constructor is the built-in Object constructor",

description: "Creating \"new Object.prototype.constructor\" and checking its properties",

test: function testcase() {
   var constr = Object.prototype.constructor;

var obj = new constr;

// CHECK#0
if (obj === undefined) {
  $ERROR('#0: new Object() return the newly created native object.');
}

// CHECK#1
if (obj.constructor !== Object) {
  $ERROR('#1: new Object() create a new native ECMAScript object');
}

// CHECK#2
if (!(Object.prototype.isPrototypeOf(obj))) {
  $ERROR('#2: when new Object() calls the [[Prototype]] property of the newly constructed object is set to the Object prototype object.');
}

// CHECK#3
var to_string_result = '[object '+ 'Object' +']';
if (obj.toString() !== to_string_result) {
  $ERROR('#3: when new Object() calls the [[Class]] property of the newly constructed object is set to "Object".');
}

// CHECK#4
if (obj.valueOf().toString() !== to_string_result) {
  $ERROR('#4: when new Object() calls the newly constructed object has no [[Value]] property.');
}

 }
});

