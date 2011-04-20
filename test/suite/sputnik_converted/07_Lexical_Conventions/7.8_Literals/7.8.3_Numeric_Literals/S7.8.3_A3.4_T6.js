// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A3.4_T6;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: DecimalIntegerLiteral. DecimalDigigts ExponentPart;
 * @description: ExponentPart :: E +DecimalDigits;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A3.4_T6",

path: "07_Lexical_Conventions\7.8_Literals\7.8.3_Numeric_Literals\S7.8.3_A3.4_T6.js",

assertion: "DecimalLiteral :: DecimalIntegerLiteral. DecimalDigigts ExponentPart",

description: "ExponentPart :: E +DecimalDigits",

test: function testcase() {
   //CHECK#0
if (0.0E+1 !== 0) {
  $ERROR('#0: 0.0E+1 === 0');
}

//CHECK#1
if (1.1E+1 !== 11) {
  $ERROR('#1: 1.1E+1 === 11');
}

//CHECK#2
if (2.2E+1 !== 22) {
  $ERROR('#2: 2.2E+1 === 22');
}

//CHECK#3
if (3.3E+1 !== 33) {
  $ERROR('#3: 3.3E+1 === 33');
}

//CHECK#4
if (4.4E+1 !== 44) {
  $ERROR('#4: 4.4E+1 === 44');
}

//CHECK#5
if (5.5E+1 !== 55) {
  $ERROR('#5: 5.5E+1 === 55');
}

//CHECK#6
if (6.6E+1 !== 66) {
  $ERROR('#6: 6.E+1 === 66');
}

//CHECK#7
if (7.7E+1 !== 77) {
  $ERROR('#7: 7.7E+1 === 77');
}

//CHECK#8
if (8.8E+1 !== 88) {
  $ERROR('#8: 8.8E+1 === 88');
}

//CHECK#9
if (9.9E+1 !== 99) {
  $ERROR('#9: 9.9E+1 === 99');
}

 }
});

