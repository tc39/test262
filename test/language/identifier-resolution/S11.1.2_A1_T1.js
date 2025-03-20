// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The result of evaluating an Identifier is always a value of type Reference
es5id: 11.1.2_A1_T1
description: Creating variables without defining it
---*/

//CHECK#1
assert.sameValue(this.x, undefined, '#1: this.x === undefined');

//CHECK#2
var object = new Object();
assert.sameValue(object.prop, undefined, '#2: var object = new Object(); object.prop === undefined');

//CHECK#3
this.y++;
assert.sameValue(isNaN(y), true, '#3: this.y++; y === Not-a-Number');
