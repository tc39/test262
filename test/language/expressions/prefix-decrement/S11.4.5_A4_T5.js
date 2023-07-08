// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator --x returns ToNumber(x) - 1
es5id: 11.4.5_A4_T5
description: Type(x) is Object object or Function object
---*/

//CHECK#1
var x = {};
assert.sameValue(isNaN(--x), true, '#1: var x = {}; --x === Not-a-Number');

//CHECK#2
var x = function(){return 1};
assert.sameValue(isNaN(--x), true, '#2: var x = function(){return 1}; --x === Not-a-Number');
