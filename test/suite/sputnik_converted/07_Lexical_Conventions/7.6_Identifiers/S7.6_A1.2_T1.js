// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.6_A1.2_T1;
 * @section: 7.6;
 * @assertion: IdentifierStart :: $;
 * @description: Create variable $; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.6_A1.2_T1",

path: "07_Lexical_Conventions\7.6_Identifiers\S7.6_A1.2_T1.js",

assertion: "IdentifierStart :: $",

description: "Create variable $",

test: function testcase() {
   //CHECK#1
var $ = 1;
if ($ !== 1) {
  $ERROR('#1: var $ = 1; $ === 1. Actual: ' + ($));
}

 }
});

