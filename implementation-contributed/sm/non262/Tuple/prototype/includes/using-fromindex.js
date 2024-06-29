// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  22.1.3.11 Tuple.prototype.includes ( searchElement [ , fromIndex ] )
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/

var sample = #["a", "b", "c"];
assert.sameValue(sample.includes("a", 0), true, "includes('a', 0)");
assert.sameValue(sample.includes("a", 1), false, "includes('a', 1)");
assert.sameValue(sample.includes("a", 2), false, "includes('a', 2)");

assert.sameValue(sample.includes("b", 0), true, "includes('b', 0)");
assert.sameValue(sample.includes("b", 1), true, "includes('b', 1)");
assert.sameValue(sample.includes("b", 2), false, "includes('b', 2)");

assert.sameValue(sample.includes("c", 0), true, "includes('c', 0)");
assert.sameValue(sample.includes("c", 1), true, "includes('c', 1)");
assert.sameValue(sample.includes("c", 2), true, "includes('c', 2)");

assert.sameValue(sample.includes("a", -1), false, "includes('a', -1)");
assert.sameValue(sample.includes("a", -2), false, "includes('a', -2)");
assert.sameValue(sample.includes("a", -3), true, "includes('a', -3)");
assert.sameValue(sample.includes("a", -4), true, "includes('a', -4)");

assert.sameValue(sample.includes("b", -1), false, "includes('b', -1)");
assert.sameValue(sample.includes("b", -2), true, "includes('b', -2)");
assert.sameValue(sample.includes("b", -3), true, "includes('b', -3)");
assert.sameValue(sample.includes("b", -4), true, "includes('b', -4)");

assert.sameValue(sample.includes("c", -1), true, "includes('c', -1)");
assert.sameValue(sample.includes("c", -2), true, "includes('c', -2)");
assert.sameValue(sample.includes("c", -3), true, "includes('c', -3)");
assert.sameValue(sample.includes("c", -4), true, "includes('c', -4)");

