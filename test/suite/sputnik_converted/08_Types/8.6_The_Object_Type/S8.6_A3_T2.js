// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6_A3_T2;
* @section: 8.6, 11.4.4;
* @assertion: Do not crash with pefixincrement custom property;
* @description: Try to implement pefixincrement for not declared custom property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6_A3_T2",

path: "08_Types\8.6_The_Object_Type\S8.6_A3_T2.js",

assertion: "Do not crash with pefixincrement custom property",

description: "Try to implement pefixincrement for not declared custom property",

test: function testcase() {
   var __map={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!isNaN(++__map.foo)) {
  $ERROR('#1:  var __map={}; __map.foo++; __map.foo === Not-a-Number. Actual: ' + (__map.foo));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!("foo" in __map)) {
  $ERROR('#2: var __map={}; "foo" in __map');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

