// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A1_T2;
* @section: 13.2.2;
* @assertion: Since a function is an object, it might be set to [[Prototype]] property of a new created object through [[Construct]] property;
* @description: Declaring a function with "var __PROTO = function()";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A1_T2",

path: "13_Function_Definition\13.2_Creating_Function_Objects\S13.2.2_A1_T2.js",

assertion: "Since a function is an object, it might be set to [[Prototype]] property of a new created object through [[Construct]] property",

description: "Declaring a function with \"var __PROTO = function()\"",

test: function testcase() {
   var __MONSTER="monster";
var __PREDATOR="predator";

var __PROTO = function(){};

try{
    __PROTO.type=__MONSTER;
}
catch(e){
    $FAIL('#0: __PROTO.type=__MONSTER does not lead to throwing exception')
}

var __FACTORY = function(){this.name=__PREDATOR};

__FACTORY.prototype=__PROTO;

var __monster = new __FACTORY();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__PROTO.isPrototypeOf(__monster))) {
	$ERROR('#1: __PROTO.isPrototypeOf(__monster) must be true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__monster.type !==__MONSTER) {
	$ERROR('#2: __monster.type ===__MONSTER. Actual: __monster.type ==='+__monster.type);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

