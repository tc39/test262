// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.9
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Null
---*/

var x;

//CHECK#1
x = "1";
x += null;
assert.sameValue(x, "1null", '#1: x = "1"; x += null; x === "1null"');

//CHECK#2
x = null;
x += "1";
assert.sameValue(x, "null1", '#2: x = null; x += "1"; x === "null1"');

//CHECK#3
x = new String("1");
x += null;
assert.sameValue(x, "1null", '#3: x = new String("1"); x += null; x === "1null"');

//CHECK#4
x = null;
x += new String("1");
assert.sameValue(x, "null1", '#4: x = null; x += new String("1"); x === "null1"');
