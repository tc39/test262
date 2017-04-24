// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes works on typed arrays
author: Domenic Denicola
---*/

assert(Array.prototype.includes.call(new Uint8Array([1, 2, 3]), 2), 'Expected it to work on a Uint8Array');
assert(Array.prototype.includes.call(new Float32Array([2.5, 3.14, Math.PI]), 3.1415927410125732),
    'Expected it to work on a Float32Array');

assert.sameValue(Array.prototype.includes.call(new Uint8Array([1, 2, 3]), 4), false,
    'Expected it to return false correctly for a Uint8Array');
assert.sameValue(Array.prototype.includes.call(new Uint8Array([1, 2, 3]), 2, 2), false,
    'Expected it to return false correctly for a Uint8Array (using fromIndex)');
