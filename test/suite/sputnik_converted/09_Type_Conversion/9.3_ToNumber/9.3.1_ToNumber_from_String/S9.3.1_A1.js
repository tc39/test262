// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A1;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of StringNumericLiteral ::: [empty] is 0;
 * @description: Number('') convert to Number by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A1",

path: "09_Type_Conversion\9.3_ToNumber\9.3.1_ToNumber_from_String\S9.3.1_A1.js",

assertion: "The MV of StringNumericLiteral ::: [empty] is 0",

description: "Number(\'\') convert to Number by explicit transformation",

test: function testcase() {
   // CHECK#1
if (Number("") !== 0) {
  $ERROR('#1.1: Number("") === 0. Actual: ' + (Number("")));
} else {
  if (1/Number("") !== Number.POSITIVE_INFINITY) {
    $ERROR('#1.2: Number("") == +0. Actual: -0');
  }
}

 }
});

