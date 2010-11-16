// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.3_A3.2_T3;
 * @section: 15.1.3.3;
 * @assertion: unescapedURISet containing one instance of each character valid in uriUnescaped;
 * @description: Complex tests, uriUnescaped :: uriMark;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.3_A3.2_T3",

path: "15.1.3.3",

description: "Complex tests, uriUnescaped :: uriMark",

test: function testcase() {
   uriMark = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
for (indexC = 0; indexC < uriMark.length; indexC++) {
  var str = uriMark[indexC];    
  if (encodeURI(str) !== str) {
    $ERROR('#' + (indexC + 1) + ': unescapedURISet containing' + str);
  }  
}

 }
});

