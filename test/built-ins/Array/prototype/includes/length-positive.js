// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should clamp positive lengths to 2^53 - 1
author: Domenic Denicola
---*/

var fromIndexForLargeIndexTests = 9007199254740990;

assert.sameValue(Array.prototype.includes.call({ length: 1 }, 2), false, 'Expected { length: 1 } to not contain 2');
assert.sameValue(Array.prototype.includes.call({ length: 1, 0: 'a' }, 'a'), true,
    'Expected { length: 1, 0: \'a\' } to contain \'a\'');
assert.sameValue(Array.prototype.includes.call({ length: +Infinity, 0: 'a' }, 'a'), true,
    'Expected { length: +Infinity, 0: \'a\' } to contain \'a\'');
assert.sameValue(Array.prototype.includes.call({ length: +Infinity }, 'a', fromIndexForLargeIndexTests), false,
    'Expected { length: +Infinity } to not contain \'a\'');

var arrayLikeWithTrap = {
    length: +Infinity,
    get 9007199254740992() {
        $ERROR('Getter for 9007199254740992 (i.e. 2^53) was called');
    },
    '9007199254740993': 'a'
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTrap, 'a', fromIndexForLargeIndexTests), false,
    'Expected trapped array-like with length 9007199254740992 to not contain \'a\'');

var arrayLikeWithTooBigLength = {
    length: 9007199254740995,
    '9007199254740992': 'a'
};

assert.sameValue(Array.prototype.includes.call(arrayLikeWithTooBigLength, 'a', fromIndexForLargeIndexTests), false,
    'Expected array-like with too-big length to not contain \'a\', since it is beyond the max length');
