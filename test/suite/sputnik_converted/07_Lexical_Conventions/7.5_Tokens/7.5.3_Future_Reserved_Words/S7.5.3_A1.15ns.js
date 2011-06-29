// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.5.3_A1.15;
 * @section: 7.5.3;
 * @assertion: The "implements" token can be used as identifier in non-strict code;
 * @description: Checking if execution of "implements=1" succeeds in non-strict code;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.5.3_A1.15ns",

path: "07_Lexical_Conventions\7.5_Tokens\7.5.3_Future_Reserved_Words\S7.5.3_A1.15ns.js",

assertion: "The \"implements\" token can be used as identifier in non-strict code",

description: "Checking if execution of \"implements=1\" succeeds in non-strict code",

test: function testcase() {
   new Function('implements = 1');
 }
});

