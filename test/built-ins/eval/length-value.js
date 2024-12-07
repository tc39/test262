// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of eval is 1
esid: sec-eval-x
description: eval.length === 1
---*/

//CHECK#1
assert.sameValue(eval.length, 1, '#1: eval.length === 1');
