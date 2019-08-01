// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.isarray
description: Array.isArray applied to boolean primitive
---*/

assert.sameValue(Array.isArray(true), false, 'Array.isArray(true)');
