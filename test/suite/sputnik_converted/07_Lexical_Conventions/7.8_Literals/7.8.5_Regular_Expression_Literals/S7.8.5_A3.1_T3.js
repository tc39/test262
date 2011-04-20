// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A3.1_T3;
 * @section: 7.8.5, 15.10.4.1;
 * @assertion: RegularExpressionFlags :: IdentifierPart;
 * @description: IdentifierPart :: m;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A3.1_T3",

path: "07_Lexical_Conventions\7.8_Literals\7.8.5_Regular_Expression_Literals\S7.8.5_A3.1_T3.js",

assertion: "RegularExpressionFlags :: IdentifierPart",

description: "IdentifierPart :: m",

test: function testcase() {
   //CHECK#1
var regexp = /(?:)/m; 
if (regexp.global !== false) {
  $ERROR('#1: var regexp = /(?:)/g; regexp.global === false. Actual: ' + (regexp.global));
}

//CHECK#2 
if (regexp.ignoreCase !== false) {
  $ERROR('#2: var regexp = /(?:)/g; regexp.ignoreCase === false. Actual: ' + (regexp.ignoreCase));
}

//CHECK#3
if (regexp.multiline !== true) {
  $ERROR('#3: var regexp = /(?:)/g; regexp.multiline === true. Actual: ' + (regexp.multiline));
}                            

 }
});

