// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A1;
 * @section: 8.5, 7.8.3;
 * @assertion: NaN !== NaN;
 * @description: Compare NaN with NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A1",

path: "8.5, 7.8.3",

description: "Compare NaN with NaN",

test: function testcase() {
   var x = Number.NaN;
var x_ = Number.NaN;

///////////////////////////////////////////////////////
// CHECK #1
if (x === x_){
  $ERROR('#1: NaN !== NaN ');
}
//
//////////////////////////////////////////////////////////

 }
});

