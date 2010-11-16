// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A2.5_T5;
 * @section: 7.8.5;
 * @assertion: RegularExpressionChar :: BackslashSequence :: \LineTerminator is incorrect;  
 * @description: Line separator, with eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A2.5_T5",

path: "7.8.5",

description: "Line separator, with eval",

test: function testcase() {
   //CHECK#1
try {
   eval("/a\\\u2028/").source;
   $ERROR('#1.1: RegularExpressionChar :: BackslashSequence :: \\Line separator is incorrect. Actual: ' + (eval("/a\\\u2028/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: BackslashSequence :: \\Line separator is incorrect. Actual: ' + (e));
  }
}     

 }
});

