// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes throws a TypeError when used on non-typed arrays
author: Domenic Denicola
---*/

var taIncludes = Uint8Array.prototype.includes;

assert.throws(TypeError, function () {
    taIncludes.call({ length: 2, 0: 1, 1: 2 }, 2);
});

assert.throws(TypeError, function () {
    taIncludes.call([1, 2, 3], 2);
});

assert.throws(TypeError, function () {
    taIncludes.call(null, 2);
});

assert.throws(TypeError, function () {
    taIncludes.call(undefined, 2);
});
