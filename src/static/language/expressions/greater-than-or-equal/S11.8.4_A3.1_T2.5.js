// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x >= y returns ToNumber(x) >= ToNumber(y)
es5id: 11.8.4_A3.1_T2.5
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between String (primitive or object) and Boolean
    (primitive and object)
---*/

//CHECK#1
if (true >= "1" !== true) {
  $ERROR('#1: true >= "1" === true');
}

//CHECK#2
if ("1" >= true !== true) {
  $ERROR('#2: "1" >= true === true');
}

//CHECK#3
if (new Boolean(true) >= "1" !== true) {
  $ERROR('#3: new Boolean(true) >= "1" === true');
}

//CHECK#4
if ("1" >= new Boolean(true) !== true) {
  $ERROR('#4: "1" >= new Boolean(true) === true');
}

//CHECK#5
if (true >= new String("1") !== true) {
  $ERROR('#5: true >= new String("1") === true');
}

//CHECK#6
if (new String("1") >= true !== true) {
  $ERROR('#6: new String("1") >= true === true');
}

//CHECK#7
if (new Boolean(true) >= new String("1") !== true) {
  $ERROR('#7: new Boolean(true) >= new String("1") === true');
}

//CHECK#8
if (new String("1") >= new Boolean(true) !== true) {
  $ERROR('#8: new String("1") >= new Boolean(true) === true');
}
