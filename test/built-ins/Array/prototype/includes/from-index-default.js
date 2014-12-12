// Copyright (C) 2014 Robert Kowalski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.includes should search the whole array, as the optional second argument fromIndex defaults to 0
author: Robert Kowalski
---*/

assert([10, 11].includes(10), 'Expected that the whole array was searched');
assert([10, 11].includes(11), 'Expected that the whole array was searched');

var arrayLike = {
    length: 2,
    get 0() {
        return '1';
    },
    get 1() {
        return '2';
    }
};

assert(Array.prototype.includes.call(arrayLike, '1'), 'Expected that the whole array-like was searched');
assert(Array.prototype.includes.call(arrayLike, '2'), 'Expected that the whole array-like was searched');
