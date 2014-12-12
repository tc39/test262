// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should terminate if ToLength ends up being called on a symbol length
---*/

var fromIndexTrap = {
    valueOf: function () {
        $ERROR('Should not try to call ToInteger on valueOf');
    }
};

var badLength = {
    length: Symbol(),
    get 0() {
        $ERROR('Should not try to get the zeroth element');
    }
};

assert.throws(TypeError, function () {
    Array.prototype.includes.call(badLength, 'a', fromIndexTrap);
});
