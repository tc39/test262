// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator ~x uses GetValue
es5id: 11.4.8_A2.1_T1
description: Either Type(x) is not Reference or GetBase(x) is not null
---*/

//CHECK#1
assert.sameValue(~0, -1, '#1: ~0 === -1');

//CHECK#2
assert.sameValue(~(~0), 0, '#2: ~(~0) === 0');

//CHECK#3
var x = 0;
assert.sameValue(~x, -1, '#3: var x = 0; ~x === -1');

//CHECK#4
var x = 0;
assert.sameValue(~(~x), 0, '#4: var x = 0; ~(~x) === 0');

//CHECK#5
var object = new Object();
object.prop = 0;
assert.sameValue(~object.prop, -1, '#5: var object = new Object(); object.prop = 0; ~object.prop === -1');
