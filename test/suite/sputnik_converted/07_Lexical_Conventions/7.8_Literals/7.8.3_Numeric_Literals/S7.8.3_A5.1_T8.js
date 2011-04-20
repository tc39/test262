// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A5.1_T8;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: HexIntegerLiteral;  
 * @description: HexIntegerLiteral :: 0X one of a, b, c, d, e, f;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A5.1_T8",

path: "07_Lexical_Conventions\7.8_Literals\7.8.3_Numeric_Literals\S7.8.3_A5.1_T8.js",

assertion: "DecimalLiteral :: HexIntegerLiteral",

description: "HexIntegerLiteral :: 0X one of a, b, c, d, e, f",

test: function testcase() {
   //CHECK#a
if (0Xa !== 10) {
  $ERROR('#a: 0Xa === 10');
}

//CHECK#b
if (0Xb !== 11) {
  $ERROR('#b: 0Xb === 11');
}

//CHECK#c
if (0Xc !== 12) {
  $ERROR('#c: 0Xc === 12');
}

//CHECK#d
if (0Xd !== 13) {
  $ERROR('#d: 0Xd === 13');
}

//CHECK#e
if (0Xe !== 14) {
  $ERROR('#e: 0Xe === 14');
}

//CHECK#f
if (0Xf !== 15) {
  $ERROR('#f: 0Xf === 15');
}

 }
});

