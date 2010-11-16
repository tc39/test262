// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.4_A10;
* @section: 15.5.4.4;
* @assertion: The String.prototype.charAt.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.charAt.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.4_A10",

path: "15.5.4.4",

description: "Checking if varying the String.prototype.charAt.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.charAt.hasOwnProperty('length'))) {
  $ERROR('#1: String.prototype.charAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.charAt.length;

String.prototype.charAt.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.charAt.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.charAt.length; String.prototype.charAt.length = function(){return "shifted";}; String.prototype.charAt.length === __obj. Actual: '+String.prototype.charAt.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

