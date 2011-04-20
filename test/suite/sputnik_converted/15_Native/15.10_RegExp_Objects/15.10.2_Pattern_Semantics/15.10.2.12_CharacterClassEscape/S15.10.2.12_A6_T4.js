// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A6_T4;
* @section: 15.10.2.12;
* @assertion: The production CharacterClassEscape :: D evaluates by returning the set of all characters not
* included in the set returned by CharacterClassEscape :: d;
* @description: RUSSIAN ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A6_T4",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.12_CharacterClassEscape\S15.10.2.12_A6_T4.js",

assertion: "The production CharacterClassEscape :: D evaluates by returning the set of all characters not",

description: "RUSSIAN ALPHABET",

test: function testcase() {
   //CHECK#1
var non_d = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\f\n\r\t\v~`!@#$%^&*()-+={[}]|\\:;'<,>./? " + '"';
var regexp_D = /\D/g;
var k = 0;
while (regexp_D.exec(non_d) !== null) {
   k++;
}

if (non_d.length !== k) {
   $ERROR('#1: non-d');
}

//CHECK#2
var non_d = '0123456789';
if (/\D/.exec(non_d) !== null) {
   $ERROR('#2: non-d');
}

 }
});

