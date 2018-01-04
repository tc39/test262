// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    arrays with empty arrays elements
includes: [compareArray.js]
---*/

var a;
assert(compareArray([].flatten([[]]), []));
assert(compareArray(Array.prototype.flatten.call([[], []]), []));
assert(compareArray(Array.prototype.flatten.call([[], [1]]), [1]));
assert(compareArray(Array.prototype.flatten.call([[], [1, a = []]]), [1, a]));
assert.sameValue(JSON.stringify(Array.prototype.flatten.call([{}, []])), JSON.stringify([{}]));
