// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    A property name P (in the form of a string value) is an array index
    if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1
es5id: 15.4_A1.1_T3
description: Checking for number primitive
---*/

var x = [];
x[4294967296] = 1;
assert.sameValue(x[0], undefined, 'The value of x[0] is expected to equal undefined');
assert.sameValue(x["4294967296"], 1, 'The value of x["4294967296"] is expected to be 1');

var y = [];
y[4294967297] = 1;
assert.sameValue(y[1], undefined, '#3: y = []; y[4294967297] = 1; y[1] === undefined');

//CHECK#4
assert.sameValue(y["4294967297"], 1, '#4: y = []; y[4294967297] = 1; y["4294967297"] === 1');

//CHECK#5
var z = [];
z[1.1] = 1;
assert.sameValue(z[1], undefined, '#5: z = []; z[1.1] = 1; z[1] === undefined');

//CHECK#6
assert.sameValue(z["1.1"], 1, '#6: z = []; z[1.1] = 1; z["1.1"] === 1');
