// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.18_A1_T10;
* @section: 15.5.4.18;
* @assertion: String.prototype.toUpperCase();
* @description: Call toUpperCase() function of object with overrode toString function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.18_A1_T10",

path: "15.5.4.18",

description: "Call toUpperCase() function of object with overrode toString function",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041b";}}
__obj.toUpperCase = String.prototype.toUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.toUpperCase() !=="AB") {
  $ERROR('#1: var __obj = {toString:function(){return "\u0041b";}}; __obj.toUpperCase = String.prototype.toUpperCase; __obj.toUpperCase() ==="AB". Actual: '+__obj.toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

