// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should terminate if ToNumber ends up being called on a symbol fromIndex
---*/

var trappedZero = {
    length: 1,
    get 0() {
        $ERROR('Should not try to get the zeroth element');
    }
};

assert.throws(TypeError, function () {
    Array.prototype.includes.call(trappedZero, 'a', Symbol());
});
