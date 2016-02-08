// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x <= y uses GetValue
es5id: 11.8.3_A2.1_T1
description: Either Type is not Reference or GetBase is not null
---*/

//CHECK#1
if (1 <= 1 !== true) {
  $ERROR('#1: 1 <= 1 === true');
}

//CHECK#2
var x = 1;
if (x <= 1 !== true) {
  $ERROR('#2: var x = 1; x <= 1 === true');
}

//CHECK#3
var y = 1;
if (1 <= y !== true) {
  $ERROR('#3: var y = 1; 1 <= y === true');
}

//CHECK#4
var x = 1;
var y = 1;
if (x <= y !== true) {
  $ERROR('#4: var x = 1; var y = 1; x <= y === true');
}

//CHECK#5
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 1;
if (objectx.prop <= objecty.prop !== true) {
  $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1; objecty.prop = 1; objectx.prop <= objecty.prop === true');
}
