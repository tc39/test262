// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.

    Array.of can be transplanted to other classes.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
includes: [compareArray.js]
---*/
var hits = 0;
function Bag() {
    hits++;
}
Bag.of = Array.of;

hits = 0;
var actual = Bag.of("zero", "one");
assert.sameValue(hits, 1);

hits = 0;
var expected = new Bag;
expected[0] = "zero";
expected[1] = "one";
expected.length = 2;
assert(compareArray(actual, expected));

hits = 0;
actual = Array.of.call(Bag, "zero", "one");
assert.sameValue(hits, 1);
assert(compareArray(actual, expected));

