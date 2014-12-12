// Copyright (C) 2014 Robert Kowalski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.includes searches the whole array if the computed index from the given negative fromIndex argument
    is less than 0
author: Robert Kowalski
---*/

assert([1, 3].includes(1, -4), 'Expected that the whole array was searched');
assert([1, 3].includes(3, -4), 'Expected that the whole array was searched');

var arrayLike = {
    length: 2,
    0: 'a',
    get 1() {
        return 'b';
    },
    get '-1'() {
        $ERROR('Should not try to get the element at index -1');
    }
};

assert(Array.prototype.includes.call(arrayLike, 'a', -4), 'Expected that the whole array-like was searched');
assert(Array.prototype.includes.call(arrayLike, 'b', -4), 'Expected that the whole array-like was searched');
