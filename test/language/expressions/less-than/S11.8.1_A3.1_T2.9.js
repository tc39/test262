// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x < y returns ToNumber(x) < ToNumber(y)
es5id: 11.8.1_A3.1_T2.9
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Boolean (primitive or object) and Null
---*/

//CHECK#1
if (true < null !== false) {
  $ERROR('#1: true < null === false');
}

//CHECK#2
if (null < true !== true) {
  $ERROR('#2: null < true === true');
}

//CHECK#3
if (new Boolean(true) < null !== false) {
  $ERROR('#3: new Boolean(true) < null === false');
}

//CHECK#4
if (null < new Boolean(true) !== true) {
  $ERROR('#4: null < new Boolean(true) === true');
}
