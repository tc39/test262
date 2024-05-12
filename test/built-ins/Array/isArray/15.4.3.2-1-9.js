// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-1-9
description: Array.isArray applied to Date object
---*/

assert.sameValue(Array.isArray(new Date(1970)), false, 'Array.isArray(new Date(1970)) must return false');
