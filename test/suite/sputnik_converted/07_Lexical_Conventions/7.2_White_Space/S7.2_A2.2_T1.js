// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A2.2_T1;
 * @section: 7.2, 7.8.4;
 * @assertion: VERTICAL TAB (U+000B) may occur within strings;
 * @description: Use VERTICAL TAB(\u000B and \v);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A2.2_T1",

path: "07_Lexical_Conventions\7.2_White_Space\S7.2_A2.2_T1.js",

assertion: "VERTICAL TAB (U+000B) may occur within strings",

description: "Use VERTICAL TAB(\\u000B and \\v)",

test: function testcase() {
   // CHECK#1
if (eval("'\u000Bstr\u000Bing\u000B'") !== "\u000Bstr\u000Bing\u000B") {
  $ERROR('#1: eval("\'\\u000Bstr\\u000Bing\\u000B\'") === "\\u000Bstr\\u000Bing\\u000B"');
}

//CHECK#2
if (eval("'\vstr\ving\v'") !== "\vstr\ving\v") {
  $ERROR('#2: eval("\'\\vstr\\ving\\v\'") === "\\vstr\\ving\\v"');
}

 }
});

