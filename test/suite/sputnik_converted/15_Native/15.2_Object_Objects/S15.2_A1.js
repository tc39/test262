// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2_A1;
* @section: 15.2;
* @assertion: Object is the property of global;
* @description: Checking if Object equals to this.Object; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2_A1",

path: "15_Native\15.2_Object_Objects\S15.2_A1.js",

assertion: "Object is the property of global",

description: "Checking if Object equals to this.Object",

test: function testcase() {
   var obj=Object;

var thisobj=this.Object;

if(obj!==thisobj){
  $ERROR('Object is the property of global');
}

 }
});

