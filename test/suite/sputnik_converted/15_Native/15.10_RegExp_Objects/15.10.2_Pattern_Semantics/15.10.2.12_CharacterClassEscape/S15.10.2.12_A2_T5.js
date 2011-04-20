// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A2_T5;
* @section: 15.10.2.12, 7.2, 7.3;
* @assertion: The production CharacterClassEscape :: S evaluates by returning 
* the set of all characters not included in the set returned by 
* CharacterClassEscape :: s;
* @description: Tested string is "0123456789_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"';
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A2_T5",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.12_CharacterClassEscape\S15.10.2.12_A2_T5.js",

assertion: "The production CharacterClassEscape :: S evaluates by returning",

description: "Tested string is \"0123456789_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()-+={[}]|\\\\:;\'<,>./?\" + \'\"\'",

test: function testcase() {
   //CHECK#1
var non_s = "0123456789_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"';
var regexp_S = /\S/g;
var k = 0;
while (regexp_S.exec(non_s) !== null) {
   k++;
}

if (non_s.length !== k) {
   $ERROR('#1: non-s');
}  

//CHECK#2
var non_S = '\f\n\r\t\v ';
if (/\S/.exec(non_S) !== null) {
   $ERROR('#2: non-S');
}

 }
});

