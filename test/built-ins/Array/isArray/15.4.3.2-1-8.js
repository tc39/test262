// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.isarray
description: Array.isArray applied to the Math object
---*/

assert.sameValue(Array.isArray(Math), false, 'Array.isArray(Math)');
