// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A12_T4;
* @section: 12.5;
* @assertion: Embedded "if/else" constructions are allowed;
* @description: Using embedded "if" into "if" constructions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A12_T4",

path: "12.5",

description: "Using embedded \"if\" into \"if\" constructions",

test: function testcase() {
   //CHECK# 1
if(true)
  if (false)
    $ERROR('#1.1: At embedded "if/else" constructions engine must select right branches');

//CHECK# 2
var c=0;
if(true)
  if (true)
    c=2;
if (c!==2)
    $ERROR('#2: At embedded "if/else" constructions engine must select right branches');

//CHECK# 3
if(false)
  if (true)
    $ERROR('#3.1: At embedded "if/else" constructions engine must select right branches');

//CHECK# 4
if(false)
  if (true)
    $ERROR('#4.1: At embedded "if/else" constructions engine must select right branches');

 }
});

