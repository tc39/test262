// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes converts its fromIndex parameter to an integer
author: Domenic Denicola
---*/

assert.sameValue(['a', 'b'].includes('a', 2.3), false, 'Expected that the array was not searched');

var arrayLikeWithTraps = {
    length: 2,
    get 0() {
        $ERROR('Getter for 0 was called');
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTraps, 'c', 2.1), false,
    'Expected the array to be searched for a fromIndex fractionally above the length');
assert.sameValue(Array.prototype.includes.call(arrayLikeWithTraps, 'c', +Infinity), false,
    'Expected the array not to be searched for a fromIndex of +Infinity');

assert.sameValue(['a', 'b', 'c'].includes('a', -Infinity), true,
    'Expected the array to be searched for a fromIndex of -Infinity');
assert.sameValue(['a', 'b', 'c'].includes('c', 2.9), true,
    'Expected the fromIndex to be rounded down and thus the element to be found');
assert.sameValue(['a', 'b', 'c'].includes('c', NaN), true,
    'Expected a fromIndex of NaN to be treated as 0 for an array');

var arrayLikeWithTrapAfterZero = {
    length: 2,
    get 0() {
        return 'a';
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTrapAfterZero, 'a', NaN), true,
    'Expected a fromIndex of NaN to be treated as 0 for an array-like');

var numberLike = { valueOf: function () { return 2; } };

assert.sameValue(['a', 'b', 'c'].includes('a', numberLike), false,
    'Expected the element not to be found with the given number-like fromIndex');
assert.sameValue(['a', 'b', 'c'].includes('a', '2'), false,
    'Expected the element not to be found with the given string fromIndex');
assert.sameValue(['a', 'b', 'c'].includes('c', numberLike), true,
    'Expected the element to be found with the given number-like fromIndex');
assert.sameValue(['a', 'b', 'c'].includes('c', '2'), true,
    'Expected the element to be found with the given string fromIndex');
