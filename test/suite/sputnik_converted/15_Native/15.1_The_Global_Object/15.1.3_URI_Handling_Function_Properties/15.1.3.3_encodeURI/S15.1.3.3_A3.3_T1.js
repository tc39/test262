// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.3_A3.3_T1;
 * @section: 15.1.3.3;
 * @assertion: unescapedURISet containing "#";
 * @description: encodeURI("#") === "#";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.3_A3.3_T1",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.3_encodeURI\S15.1.3.3_A3.3_T1.js",

assertion: "unescapedURISet containing \"#\"",

description: "encodeURI(\"#\") === \"#\"",

test: function testcase() {
   if (encodeURI("#") !== "#") {
  $ERROR('#1: unescapedURISet containing "#"');
}  

 }
});

