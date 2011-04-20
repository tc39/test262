// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.4_A3.3_T1;
 * @section: 15.1.3.4;
 * @assertion: unescapedURIComponentSet not containing "#";
 * @description: encodeURIComponent("#") === "%23";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.4_A3.3_T1",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.4_encodeURIComponent\S15.1.3.4_A3.3_T1.js",

assertion: "unescapedURIComponentSet not containing \"#\"",

description: "encodeURIComponent(\"#\") === \"%23\"",

test: function testcase() {
   if (encodeURIComponent("#") !== "%23") {
  $ERROR('#1: unescapedURIComponentSet not containing "%23"');
}  

 }
});

