// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A2_T5;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp) returns ...;
* @description: Checking case sensitive of search, argument is RegExp without uppercase symbols;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A2_T5",

path: "15.5.4.12",

description: "Checking case sensitive of search, argument is RegExp without uppercase symbols",

test: function testcase() {
   var bString = new String("one two three four five");
var regExp = /four/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (bString.search(regExp)!== 14) {
  $ERROR('#1: var bString = new String("one two three four five"); var regExp = /four/; bString.search(regExp)=== 14. Actual: '+bString.search(regExp));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

