// Copyright (C) 2014 Robert Kowalski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes returns false if fromIndex is greater or equal to the length of the array
author: Robert Kowalski
---*/

assert.sameValue([1, 2].includes(2, 3), false, 'Expected that the array was not searched');
assert.sameValue([1, 2].includes(2, 2), false, 'Expected that the array was not searched');

var arrayLikeWithTrap = {
    length: 2,
    get 0() {
        $ERROR('Getter for 0 was called');
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTrap, 'c', 2), false,
    'Expected that the array-like was not searched');
assert.sameValue(Array.prototype.includes.call(arrayLikeWithTrap, 'c', 3), false,
    'Expected that the array-like was not searched');
