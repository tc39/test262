// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.entries sees a new element added by a getter that is hit during iteration
author: Jordan Harband
---*/

var bAddsC = {
    a: 'A',
    get b() {
        this.c = 'C';
        return 'B';
    }
};

var result = Object.entries(bAddsC);

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 3, 'result has 3 items');

assert.sameValue(Array.isArray(result[0]), true, 'first entry is an array');
assert.sameValue(Array.isArray(result[1]), true, 'second entry is an array');
assert.sameValue(Array.isArray(result[2]), true, 'third entry is an array');

assert.sameValue(result[0][0], 'a', 'first entry has key "a"');
assert.sameValue(result[0][1], 'A', 'first entry has value "A"');
assert.sameValue(result[1][0], 'b', 'second entry has key "b"');
assert.sameValue(result[1][1], 'B', 'second entry has value "B"');
assert.sameValue(result[2][0], 'c', 'third entry has key "c"');
assert.sameValue(result[2][1], 'C', 'third entry has value "C"');
