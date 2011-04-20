// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.4_A3.2_T2;
 * @section: 15.1.3.4;
 * @assertion: unescapedURIComponentSet containing one instance of each character valid in uriUnescaped;
 * @description: Complex tests, uriUnescaped :: DecimalDigit;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.4_A3.2_T2",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.4_encodeURIComponent\S15.1.3.4_A3.2_T2.js",

assertion: "unescapedURIComponentSet containing one instance of each character valid in uriUnescaped",

description: "Complex tests, uriUnescaped :: DecimalDigit",

test: function testcase() {
   DecimalDigit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (indexC = 0; indexC < DecimalDigit.length; indexC++) {
  var str = DecimalDigit[indexC];    
  if (encodeURIComponent(str) !== str) {
    $ERROR('#' + (indexC + 1) + ': unescapedURISet containing' + str);
  }  
}

 }
});

