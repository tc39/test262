// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A7.1_T1;
 * @section: 15.1.2.2;
 * @assertion: If Z is empty, return NaN;
 * @description: Complex test. R in [2, 36];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A7.1_T1",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A7.1_T1.js",

assertion: "If Z is empty, return NaN",

description: "Complex test. R in [2, 36]",

test: function testcase() {
   //CHECK#
for (var i = 2; i <= 36; i++) {
  if (isNaN(parseInt("$string", i)) !== true) {
    $ERROR('#' + i + ': parseInt("$string", i) === Not-a-Number. Actual: ' + (parseInt("$string", i)));
  }
}    

 }
});

