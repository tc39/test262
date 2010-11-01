// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.7.2_A3;
* @section: 8.7.2;
* @assertion: this.x++ calls GetValue then PutValue so after applying postfix increment(actually conrete operator type is unimportan)
* we must have reference to defined value;
* @description: Execute this.x++, where this.x is undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.7.2_A3",

path: "8.7.2",

description: "Execute this.x++, where this.x is undefined",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (this.S8_7_2_A3_x !== undefined) {
    $ERROR('#1: this.S8_7_2_A3_x === undefined. Actual: ' + (this.S8_7_2_A3_x));
}
//
//////////////////////////////////////////////////////////////////////////////
this.S8_7_2_A3_x++;
//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (S8_7_2_A3_x === undefined) {
    $ERROR('#2: this.S8_7_2_A3_x; this.S8_7_2_A3_x++; S8_7_2_A3_x !== undefined');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

