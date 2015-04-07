// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.6
description: >
    The fill() method fills all the elements of an array from a start
    index to an end index with a static value.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
includes: [compareArray.js]
---*/
assert.sameValue(1, Array.prototype.fill.length);

assert(compareArray([].fill(8), []));
assert(compareArray(
  [0, 0, 0, 0, 0].fill(),
  [undefined, undefined, undefined, undefined, undefined]
));
assert(compareArray([0, 0, 0, 0, 0].fill(8), [8, 8, 8, 8, 8]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, 1), [0, 8, 8, 8, 8]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, 10), [0, 0, 0, 0, 0]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, -5), [8, 8, 8, 8, 8]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, 1, 4), [0, 8, 8, 8, 0]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, 1, -1), [0, 8, 8, 8, 0]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, 1, 42), [0, 8, 8, 8, 8]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, -3, 42), [0, 0, 8, 8, 8]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, -3, 4), [0, 0, 8, 8, 0]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, -2, -1), [0, 0, 0, 8, 0]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, -1, -3), [0, 0, 0, 0, 0]));
assert(compareArray([0, 0, 0, 0, 0].fill(8, undefined, 4), [8, 8, 8, 8, 0]));
assert(compareArray([ ,  ,  ,  , 0].fill(8, 1, 3), [, 8, 8, , 0]));
