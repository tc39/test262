// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A5.1_T1;
 * @section: 15.1.2.2;
 * @assertion: If the length of S is at least 1 and the first character of S is 0, 
 * then at the implementation's discretion either let R = 8 or R = 10; 
 * @description: Either R = 8, or R = 10;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A5.1_T1",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A5.1_T1.js",

assertion: "If the length of S is at least 1 and the first character of S is 0,",

description: "Either R = 8, or R = 10",

test: function testcase() {
   //CHECK#
var res8 = 1;
var res10 = 1;
if (parseInt("08") !== parseInt("08", 8)) {
  res8 = 0;
}
if (parseInt("08") !== parseInt("08", 10)) {
  res10 = 0;
}
if (parseInt("09") !== parseInt("09", 8)) {
  res8 = 0;
}
if (parseInt("09") !== parseInt("09", 10)) {
  res10 = 0;
}
if (parseInt("010") !== parseInt("010", 8)) {
  res8 = 0;
}
if (parseInt("010") !== parseInt("010", 10)) {
  res10 = 0;
}
if (res8 + res10 !== 1) {
  $ERROR('#1: If the length of S is at least 1 and the first character of S is 0, then at the implementation\'s discretion either let R = 8 or R = 10');
}    

 }
});

