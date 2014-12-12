// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes treats a missing length property as zero
author: Domenic Denicola
---*/

var arrayLikeWithTraps = {
    get 0() {
        $ERROR('Getter for 0 was called');
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTraps, 'a'), false,
    'Expected a length-less object not to contain anything');
