// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "DecimalLiteral :: DecimalIntegerLiteral ExponentPart"
es5id: 7.8.3_A1.2_T5
description: "ExponentPart :: e +DecimalDigits"
---*/

//CHECK#0
if (0e+1 !== 0) {
  $ERROR('#0: 0e+1 === 0');
}

//CHe+CK#1
if (1e+1 !== 10) {
  $ERROR('#1: 1e+1 === 10');
}

//CHe+CK#2
if (2e+1 !== 20) {
  $ERROR('#2: 2e+1 === 20');
}

//CHe+CK#3
if (3e+1 !== 30) {
  $ERROR('#3: 3e+1 === 30');
}

//CHe+CK#4
if (4e+1 !== 40) {
  $ERROR('#4: 4e+1 === 40');
}

//CHe+CK#5
if (5e+1 !== 50) {
  $ERROR('#5: 5e+1 === 50');
}

//CHe+CK#6
if (6e+1 !== 60) {
  $ERROR('#6: 6e+1 === 60');
}

//CHe+CK#7
if (7e+1 !== 70) {
  $ERROR('#7: 7e+1 === 70');
}

//CHe+CK#8
if (8e+1 !== 80) {
  $ERROR('#8: 8e+1 === 80');
}

//CHe+CK#9
if (9e+1 !== 90) {
  $ERROR('#9: 9e+1 === 90');
}
