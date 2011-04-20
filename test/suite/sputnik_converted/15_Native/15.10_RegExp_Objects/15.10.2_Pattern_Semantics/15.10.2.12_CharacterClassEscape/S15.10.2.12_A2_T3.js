// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A2_T3;
* @section: 15.10.2.12, 7.2, 7.3;
* @assertion: The production CharacterClassEscape :: S evaluates by returning 
* the set of all characters not included in the set returned by 
* CharacterClassEscape :: s;
* @description: ENGLISH ALPHABET; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A2_T3",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.12_CharacterClassEscape\S15.10.2.12_A2_T3.js",

assertion: "The production CharacterClassEscape :: S evaluates by returning",

description: "ENGLISH ALPHABET",

test: function testcase() {
   var regexp_S = /\S/;

//CHECK#0041-005A
var result = true;
for (alpha = 0x0041; alpha <= 0x005A; alpha++) {
  str = String.fromCharCode(alpha);
  arr = regexp_S.exec(str); 
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: ENGLISH CAPITAL ALPHABET');
}  

//CHECK#0061-007A
var result = true; 
for (alpha = 0x0061; alpha <= 0x007A; alpha++) {
  str = String.fromCharCode(alpha);
  arr = regexp_S.exec(str); 
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#2: english small alphabet');
} 

 }
});

