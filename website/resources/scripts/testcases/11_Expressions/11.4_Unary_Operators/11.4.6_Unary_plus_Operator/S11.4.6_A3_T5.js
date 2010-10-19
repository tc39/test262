// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.6_A3_T5;
* @section: 11.4.6;
* @assertion: Operator +x returns ToNumber(x);
* @description: Type(x) is Object object or Function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.6_A3_T5",

path: "11.4.6",

description: "Type(x) is Object object or Function object",

test: function testcase() {
   //CHECK#1
if (isNaN(+{}) !== true) {
  $ERROR('#1: +{} === Not-a-Number. Actual: ' + (+{}));
}

//CHECK#2  
if (isNaN(+function(){return 1}) !== true) {
  $ERROR('#2: +function(){return 1} === Not-a-Number. Actual: ' + (+function(){return 1}));
}

 }
});

