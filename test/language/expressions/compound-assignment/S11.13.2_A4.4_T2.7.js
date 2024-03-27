// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.7
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Boolean (primitive and object)
---*/

var x;

//CHECK#1
x = true;
x += "1";
assert.sameValue(x, "true1", '#1: x = true; x += "1"; x === "true1"');

//CHECK#2
x = "1";
x += true;
assert.sameValue(x, "1true", '#2: x = "1"; x += true; x === "1true"');

//CHECK#3
x = new Boolean(true);
x += "1";
assert.sameValue(x, "true1", '#3: x = new Boolean(true); x += "1"; x === "true1"');

//CHECK#4
x = "1";
x += new Boolean(true);
assert.sameValue(x, "1true", '#4: x = "1"; x += new Boolean(true); x === "1true"');

//CHECK#5
x = true;
x += new String("1");
assert.sameValue(x, "true1", '#5: x = true; x += new String("1"); x === "true1"');

//CHECK#6
x = new String("1");
x += true;
assert.sameValue(x, "1true", '#6: x = new String("1"); x += true; x === "1true"');

//CHECK#7
x = new Boolean(true);
x += new String("1");
assert.sameValue(x, "true1", '#7: x = new Boolean(true); x += new String("1"); x === "true1"');

//CHECK#8
x = new String("1");
x += new Boolean(true);
assert.sameValue(x, "1true", '#8: x = new String("1"); x += new Boolean(true); x === "1true"');
