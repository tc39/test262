// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When the isPrototypeOf method is called with argument V and when O and
    V refer to the same object or to objects joined to each other, return true
es5id: 15.2.4.6_A1
description: Creating two objects with the same prototype
---*/

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
assert.sameValue(
  proto.isPrototypeOf(luke),
  true,
  '#1: native ECMAScript objects have an internal property called [[Prototype]].'
);

//
/////////
//////
// CHECK#2
assert.sameValue(
  USER_FACTORY.prototype.isPrototypeOf(luke),
  true,
  '#2: native ECMAScript objects have an internal property called [[Prototype]].'
);

//
/////////
//////
// CHECK#3
if(Number.isPrototypeOf(luke)){
  $ERROR('#2: Native ECMAScript objects have an internal property called [[Prototype]].');
}
//
/////////
