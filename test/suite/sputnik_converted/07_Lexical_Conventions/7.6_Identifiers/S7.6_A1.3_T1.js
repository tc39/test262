// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.6_A1.3_T1;
 * @section: 7.6;
 * @assertion: IdentifierStart :: _;
 * @description: Create variable _; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.6_A1.3_T1",

path: "07_Lexical_Conventions\7.6_Identifiers\S7.6_A1.3_T1.js",

assertion: "IdentifierStart :: _",

description: "Create variable _",

test: function testcase() {
   //CHECK#1
var _ = 1;
if (_ !== 1) {
  $ERROR('#1: var _ = 1; _ === 1. Actual: ' + (_));
}

 }
});

