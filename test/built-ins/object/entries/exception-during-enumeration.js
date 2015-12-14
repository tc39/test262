// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.entries should terminate if getting a value throws an exception
es7id: pending
author: Jordan Harband
---*/

var trappedKey = {
    get a() {
        throw new RangeError('This error should be re-thrown');
    },
    get b() {
        $ERROR('Should not try to get the second element');
    }
};

assert.throws(RangeError, function () {
    Object.entries(trappedKey);
});
