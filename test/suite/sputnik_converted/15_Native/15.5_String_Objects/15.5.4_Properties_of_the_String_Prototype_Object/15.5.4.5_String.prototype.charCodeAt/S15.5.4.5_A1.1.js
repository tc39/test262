// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A1.1;
* @section: 15.5.4.5, 13.2;
* @assertion: String.prototype.charCodeAt() can accept many arguments;
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A1.1",

path: "15.5.4.5, 13.2",

description: "Checking by using eval",

test: function testcase() {
   function __FACTORY(){this.toString = function(){ return "wizard";};};

__FACTORY.prototype.charCodeAt = String.prototype.charCodeAt;

var __instance = new __FACTORY;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__instance){
   
    if (__instance.charCodeAt(eval("1"),true,null,{})!== 0x69) {
      $ERROR('#1: __instance.charCodeAt(eval("1"),true,null,{})=== 0x69. Actual: __instance.charCodeAt(eval("1"),true,null,{})==='+__instance.charCodeAt(eval("1"),true,null,{})); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

