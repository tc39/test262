// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: thisArg should be bound to this if provided
---*/

var globalThis = this;

[1].find(function () {
    assert.sameValue(this, Array, 'this should equal Array');
    assert.notSameValue(this, globalThis, 'this should not equal globalThis');
}, Array);
