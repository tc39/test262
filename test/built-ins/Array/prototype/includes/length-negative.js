// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should always return false on negative-length objects
author: Domenic Denicola
---*/

assert.sameValue(Array.prototype.includes.call({ length: -1 }, 2), false, 'Expected { length: -1 } to not contain 2');
assert.sameValue(Array.prototype.includes.call({ length: -2 }), false,
    'Expected { length: -2 } to not contain (no argument passed)');
assert.sameValue(Array.prototype.includes.call({ length: -Infinity }, undefined), false,
    'Expected { length: -Infinity } to not contain undefined');
assert.sameValue(Array.prototype.includes.call({ length: -Math.pow(2, 53) }, NaN), false,
    'Expected { length: -Math.pow(2, 53) } to not contain NaN');
assert.sameValue(Array.prototype.includes.call({ length: -1, '-1': 2 }, 2), false,
    'Expected { length: -1, "-1": 2 } to not contain 2');
assert.sameValue(Array.prototype.includes.call({ length: -3, '-1': 2 }, 2), false,
    'Expected { length: -3, "-1": 2 } to not contain 2');
assert.sameValue(Array.prototype.includes.call({ length: -Infinity, '-1': 2 }, 2), false,
    'Expected { length: -Infinity, "-1": 2 } to not contain 2');


var arrayLikeWithTrap = {
    length: -1,
    get 0() {
        $ERROR('Getter for 0 was called');
    }
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTrap, 2), false,
    'Expected trapped array-like with length -1 to not contain 2');
