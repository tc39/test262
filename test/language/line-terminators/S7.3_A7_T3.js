// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Line Terminators between operators are allowed
es5id: 7.3_A7_T3
description: Insert Line Terminator in var x=y*z
---*/

// CHECK#1
var y=3;
var z=2;
var
x
=
y
*
z
;
assert.sameValue(x, 6, '#1: var\\nx\\n=\\ny\\n*\\nz\\n; x === 6');
x=0;

// CHECK#2
var y=3;
var z=2;
var
x
=
y
*
z
;
assert.sameValue(x, 6, '#2: var\\nx\\n=\\ny\\n*\\nz\\n; x === 6');
x=0;

// CHECK#3
var result;
var y=3;
var z=2;
eval("\u2028var\u2028x\u2028=\u2028y\u2028*\u2028z\u2028; result = x;");
assert.sameValue(result, 6, '#3: eval("\\u2028var\\u2028x\\u2028=\\u2028y\\u2028*\\u2028z\\u2028; result = x;"); result === 6');
result=0;

// CHECK#4
var y=3;
var z=2;
eval("\u2029var\u2029x\u2029=\u2029y\u2029*\u2029z\u2029; result = x;");
assert.sameValue(result, 6, '#4: eval("\\u2029var\\u2029x\\u2029=\\u2029y\\u2029*\\u2029z\\u2029; result = x;"); result === 6');
