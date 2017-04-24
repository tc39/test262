// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.includes should use ToObject on this, so that when called with a number, it picks up numeric
    properties from Number.prototype
author: Domenic Denicola
---*/

Number.prototype[0] = 'a';
Number.prototype[1] = 'b';
Object.defineProperty(Number.prototype, 2, {
    get: function () {
        assert.sameValue(typeof this, 'object', 'Expected boxed this in sloppy mode');
        return 'c';
    }
})
Number.prototype.length = 3;

assert.sameValue(Array.prototype.includes.call(5, 'a'), true, 'Expected 5 to contain "a"');
assert.sameValue(Array.prototype.includes.call(5, 'b'), true, 'Expected 5 to contain "b"');
assert.sameValue(Array.prototype.includes.call(5, 'c'), true, 'Expected 5 to contain "c"');
assert.sameValue(Array.prototype.includes.call(5, 'd'), false, 'Expected 5 to not contain "d"');
