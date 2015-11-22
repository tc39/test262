// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.values sees a new element added by a getter that is hit during iteration
author: Jordan Harband
---*/

var bAddsC = {
    a: 'A',
    get b() {
        this.c = 'C';
        return 'B';
    }
};

var result = Object.values(bAddsC);

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 3, 'result has 3 items');

assert.sameValue(result[0], 'A', 'first value is "A"');
assert.sameValue(result[1], 'B', 'second value is "B"');
assert.sameValue(result[2], 'C', 'third value is "C"');
