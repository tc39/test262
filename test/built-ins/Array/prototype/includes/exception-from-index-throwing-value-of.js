// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should terminate if an exception occurs converting the fromIndex to a number
includes: [Test262Error.js]
---*/

var fromIndex = {
    valueOf: function () {
        throw new Test262Error('This error should be re-thrown');
    }
};

var trappedZero = {
    length: 1,
    get 0() {
        $ERROR('Should not try to get the zeroth element');
    }
};

assert.throws(Test262Error, function () {
    Array.prototype.includes.call(trappedZero, 'a', fromIndex);
});
