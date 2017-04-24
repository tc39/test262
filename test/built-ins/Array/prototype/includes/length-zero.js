// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should always return false on zero-length objects
author: Domenic Denicola
---*/

assert.sameValue([].includes(2), false, 'Expected [] to not contain 2');
assert.sameValue([].includes(), false, 'Expected [] to not contain (no argument passed)');
assert.sameValue([].includes(undefined), false, 'Expected [] to not contain undefined');
assert.sameValue([].includes(NaN), false, 'Expected [] to not contain NaN');


assert.sameValue(Array.prototype.includes.call({ length: 0 }, 2), false, 'Expected { length: 0 } to not contain 2');
assert.sameValue(Array.prototype.includes.call({ length: 0 }), false,
    'Expected { length: 0 } to not contain (no argument passed)');
assert.sameValue(Array.prototype.includes.call({ length: 0 }, undefined), false,
    'Expected { length: 0 } to not contain undefined');
assert.sameValue(Array.prototype.includes.call({ length: 0 }, NaN), false,
    'Expected { length: 0 } to not contain NaN');

assert.sameValue(Array.prototype.includes.call({ length: 0, 0: 2 }, 2), false,
    'Expected { length: 0, 0: 2 } to not contain 2');
assert.sameValue(Array.prototype.includes.call({ length: 0, 0: undefined }), false,
    'Expected { length: 0, 0: undefined } to not contain (no argument passed)');
assert.sameValue(Array.prototype.includes.call({ length: 0, 0: undefined }, undefined), false,
    'Expected { length: 0, 0: undefined } to not contain undefined');
assert.sameValue(Array.prototype.includes.call({ length: 0, 0: NaN }, NaN), false,
    'Expected { length: 0, 0: NaN } to not contain NaN');


var arrayLikeWithTrap = {
    length: 0,
    get 0() {
        $ERROR('Getter for 0 was called');
    }
};

Array.prototype.includes.call(arrayLikeWithTrap);

var trappedFromIndex = {
    valueOf: function () {
        $ERROR('Should not try to convert fromIndex to a number on a zero-length array');
    }
};

[].includes('a', trappedFromIndex);
Array.prototype.includes.call({ length: 0 }, trappedFromIndex);
