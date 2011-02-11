// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.1.2_A1_T1;
 * @section: 11.1.2;
 * @assertion: The result of evaluating an Identifier is always a value of type Reference;
 * @description: Creating variables without defining it;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.2_A1_T1",

path: "11.1.2",

description: "Creating variables without defining it",

test: function testcase() {
   //CHECK#1
if (this.x !== undefined) {
  $ERROR('#1: this.x === undefined. Actual: ' + (this.x));
}

//CHECK#2
var object = new Object();
if (object.prop !== undefined) {
  $ERROR('#2: var object = new Object(); object.prop === undefined. Actual: ' + (object.prop));
}

//CHECK#3
this.y++;
if (isNaN(y) !== true) {
  $ERROR('#3: this.y++; y === Not-a-Number. Actual: ' + (y));
}

 }
});

