// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator uses GetValue
es5id: 11.13.2_A2.1_T1.2
description: >
    Either Type is not Reference or GetBase is not null, check
    opeartor is "x /= y"
---*/

//CHECK#1
var x = 1;
var z = (x /= -1);
assert.sameValue(z, -1, '#1: var x = 1; var z = (x /= -1); z === -1');

//CHECK#2
var x = 1;
var y = -1;
var z = (x /= y);
assert.sameValue(z, -1, '#2: var x = 1; var y = -1; var z = (x /= y); z === -1');
