// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.2.4.6_A1;
 * @section: 15.2.4.6;
 * @assertion: When the isPrototypeOf method is called with argument V and when O and 
 * V refer to the same object or to objects joined to each other, return true;
 * @description: Creating two objects with the same prototype;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.6_A1",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.6_Object.prototype.isPrototypeOf\S15.2.4.6_A1.js",

assertion: "When the isPrototypeOf method is called with argument V and when O and",

description: "Creating two objects with the same prototype",

test: function testcase() {
   function USER_FACTORY( name ) {
  this.name = name;
  this.getName=function(){return name;};
}


function FORCEDUSER_FACTORY( name, grade ) {
    this.name = name;
  this.grade = grade;
  this.getGrade=function(){return grade;};
}

var proto = new USER_FACTORY("noname");

FORCEDUSER_FACTORY.prototype = proto;

var luke = new FORCEDUSER_FACTORY("Luke Skywalker", 12);
//////
// CHECK#1
if(proto.isPrototypeOf(luke)){
  $PRINT('#1: Native ECMAScript objects have an internal property called [[Prototype]].');
} else {
  $ERROR('#1: native ECMAScript objects have an internal property called [[Prototype]].');
}
//
/////////
//////
// CHECK#2
if(USER_FACTORY.prototype.isPrototypeOf(luke)){
  $PRINT('#2: Native ECMAScript objects have an internal property called [[Prototype]].');
} else {
  $ERROR('#2: native ECMAScript objects have an internal property called [[Prototype]].');
}
//
/////////
//////
// CHECK#3
if(Number.isPrototypeOf(luke)){
  $ERROR('#2: Native ECMAScript objects have an internal property called [[Prototype]].');
}
//
/////////

 }
});

