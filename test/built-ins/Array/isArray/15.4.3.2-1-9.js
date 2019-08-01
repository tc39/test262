// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.isarray
description: Array.isArray applied to Date object
---*/

assert.sameValue(Array.isArray(new Date()), false, 'Array.isArray(new Date())');
