// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.6
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and String (primitive and object)
---*/

var x;

//CHECK#1
x = "1";
x += 1;
assert.sameValue(x, "11", '#1: x = "1"; x += 1; x === "11"');

//CHECK#2
x = 1;
x += "1";
assert.sameValue(x, "11", '#2: x = 1; x += "1"; x === "11"');

//CHECK#3
x = new String("1");
x += 1;
assert.sameValue(x, "11", '#3: x = new String("1"); x += 1; x === "11"');

//CHECK#4
x = 1;
x += new String("1");
assert.sameValue(x, "11", '#4: x = 1; x += new String("1"); x === "11"');

//CHECK#5
x = "1";
x += new Number(1);
assert.sameValue(x, "11", '#5: x = "1"; x += new Number(1); x === "11"');

//CHECK#6
x = new Number(1);
x += "1";
assert.sameValue(x, "11", '#6: x = new Number(1); x += "1"; x === "11"');

//CHECK#7
x = new String("1");
x += new Number(1);
assert.sameValue(x, "11", '#7: x = new String("1"); x += new Number(1); x === "11"');

//CHECK#8
x = new Number(1);
x += new String("1");
assert.sameValue(x, "11", '#8: x = new Number(1); x += new String("1"); x === "11"');

//CHECK#9
if ("x" + 1 !=="x1") {
  throw new Test262Error('#9: x = "x"; x += 1; x === "x1". Actual: ' + (x));
}

//CHECK#10
x = 1;
x += "x";
assert.sameValue(x, "1x", '#10: x = 1; x += "x"; x === "1x"');
