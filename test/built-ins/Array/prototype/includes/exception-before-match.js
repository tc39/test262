// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should terminate if getting an index throws an exception
includes: [Test262Error.js]
---*/

var trappedZero = {
    length: 2,
    get 0() {
        throw new Test262Error('This error should be re-thrown');
    },
    get 1() {
        $ERROR('Should not try to get the first element');
    }
};

assert.throws(Test262Error, function () {
    Array.prototype.includes.call(trappedZero, 'a');
});
