// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should fail if used on a null or undefined this
---*/

assert.throws(TypeError, function () {
    Array.prototype.includes.call(null, 'a');
});

assert.throws(TypeError, function () {
    Array.prototype.includes.call(undefined, 'a');
});
