// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.2_A1.1_T1;
 * @section: 15.1.3.2;
 * @assertion: If string.charAt(k) equal "%" and k + 2 >= string.length, throw URIError;
 * @description: Complex tests;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.2_A1.1_T1",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.2_decodeURIComponent\S15.1.3.2_A1.1_T1.js",

assertion: "If string.charAt(k) equal \"%\" and k + 2 >= string.length, throw URIError",

description: "Complex tests",

test: function testcase() {
   result = true;

//CHECK#1
try {
  decodeURIComponent("%");
  result = false;
} catch(e) {
  if ((e instanceof URIError) !== true) {
    result = false;
  }
}

//CHECK#2
try {
  decodeURIComponent("%A");
  result = false;
} catch(e) {
  if ((e instanceof URIError) !== true) {
    result = false;
  }
}

//CHECK#3
try {
  decodeURIComponent("%1");
  result = false;
} catch(e) {
  if ((e instanceof URIError) !== true) {
    result = false;
  }
}

//CHECK#4
try {
  decodeURIComponent("% ");
  result = false;
} catch(e) {
  if ((e instanceof URIError) !== true) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: If string.charAt(k) equal "%" and k + 2 >= string.length, throw URIError');
}




 }
});

