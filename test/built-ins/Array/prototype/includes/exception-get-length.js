// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should terminate if an exception occurs getting the length
includes: [Test262Error.js]
---*/

var fromIndexTrap = {
    valueOf: function () {
        $ERROR('Should not try to call ToInteger on valueOf');
    }
}

var throwingLength = {
    get length() {
        throw new Test262Error('This error should be re-thrown');
    },
    get 0() {
        $ERROR('Should not try to get the zeroth element');
    }
};

assert.throws(Test262Error, function () {
    Array.prototype.includes.call(throwingLength, 'a', fromIndexTrap);
});
