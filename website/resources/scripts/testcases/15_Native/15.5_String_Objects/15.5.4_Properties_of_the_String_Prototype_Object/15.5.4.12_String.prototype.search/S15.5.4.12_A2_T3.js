// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A2_T3;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp) returns ...;
* @description: Checking disabling of case sensitive of search, argument is RegExp;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A2_T3",

path: "15.5.4.12",

description: "Checking disabling of case sensitive of search, argument is RegExp",

test: function testcase() {
   var aString = new String("test string");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (aString.search(/String/i)!== 5) {
  $ERROR('#1: var aString = new String("test string"); aString.search(/String/i)=== 5. Actual: '+aString.search(/String/i));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

