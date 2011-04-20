// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A12.1;
 * @section: 8.5, 7.8.3;
 * @assertion: +Infinity and Infinity are the same as Number.POSITIVE_INFINITY;
 * @description: Compare Infinity and +Infinity with Number.POSITIVE_INFINITY; 
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A12.1",

path: "08_Types\8.5_The_Number_Type\S8.5_A12.1.js",

assertion: "+Infinity and Infinity are the same as Number.POSITIVE_INFINITY",

description: "Compare Infinity and +Infinity with Number.POSITIVE_INFINITY",

test: function testcase() {
   var p_inf=+Infinity;
var inf=Infinity;

//CHECK #1 
if (p_inf!==Number.POSITIVE_INFINITY){
  $ERROR('#1: +Infinity is the same as Number.POSITIVE_INFINITY');
}

//CHECK #2 
if (inf!==Number.POSITIVE_INFINITY){
  $ERROR('#2: Infinity is the same as Number.POSITIVE_INFINITY');
}

 }
});

