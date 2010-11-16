// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.10_A5.1_T1;
* @section: 15.10.2.10;
* @assertion: CharacterEscape :: IdentityEscapeSequence :: SourceCharacter but not IdentifierPart;
* @description: Tested string is "~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"';
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.10_A5.1_T1",

path: "15.10.2.10",

description: "Tested string is \"~`!@#$%^&*()-+={[}]|\\\\:;\'<,>./?\" + \'\"\'",

test: function testcase() {
   //CHECK#1
var non_ident = "~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"';
var k = -1;
do {
   k++;
   arr = new RegExp("\\" + non_ident[k], "g").exec(non_ident);   
} while ((arr !== null) && (arr[0] === non_ident[k]))

if (non_ident.length !== k) {
   $ERROR('#1: IdentityEscapeSequence :: SourceCharacter but not IdentifierPart');
} 

 }
});

