// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    arrays with null, and undefined
includes: [compareArray.js]
---*/
var a;

assert(compareArray(Array.prototype.flatten.call([1, null, void 0]), [1, null, undefined]));
assert(compareArray(Array.prototype.flatten.call([1,[null, void 0]]), [1, null, undefined]));
assert(compareArray(Array.prototype.flatten.call([[null, void 0], [null, void 0]]), [null, undefined, null, undefined]));
assert(compareArray(Array.prototype.flatten.call([1,[null, a = [void 0]]], 1), [1, null, a]));
assert(compareArray(Array.prototype.flatten.call([1,[null, [void 0]]], 2), [1, null, undefined]));
