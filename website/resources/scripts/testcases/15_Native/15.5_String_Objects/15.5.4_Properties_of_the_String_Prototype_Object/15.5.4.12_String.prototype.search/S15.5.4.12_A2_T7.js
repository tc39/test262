// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A2_T7;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp) returns ...;
* @description: Simple search sentence inside string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A2_T7",

path: "15.5.4.12",

description: "Simple search sentence inside string",

test: function testcase() {
   var aString = new String("test string probe");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (aString.search("string pro")!== 5) {
  $ERROR('#1: var aString = new String("test string probe"); aString.search("string pro")=== 5. Actual: '+aString.search("string pro"));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

