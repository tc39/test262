// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.11_A8;
* @section: 15.4.4.11;
* @assertion: Call the comparefn passing undefined as the this value (step 13b);
* @description: comparefn tests that its this value is undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.11_A8",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A8.js",

assertion: "Call the comparefn passing undefined as the this value (step 13b)",

description: "comparefn tests that its this value is undefined",

test: function testcase() {
   var global = this;
[2,3].sort(function(x,y) {
  "use strict";

  if (this === global) {
    $FAIL('#1: Sort leaks global');
  }
  if (this !== undefined) {
    $FAIL('#2: Sort comparefn should be called with this===undefined. ' +
          'Actual: ' + this);
  }
  return x - y;
});

 }
});

