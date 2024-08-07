// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
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
---*//* Step 1 */
/* toString() should throw on a non-Tuple */
let method = Tuple.prototype.toString;
assert.sameValue(method.call(#[1,2,3,4,5,6]), "1,2,3,4,5,6");
assert.sameValue(method.call(Object(#[1,2,3,4,5,6])), "1,2,3,4,5,6");
assertThrowsInstanceOf(() => method.call("monkeys"), TypeError,
                       "value of TupleObject must be a Tuple");

// Normal case
assert.sameValue(#[].toString(), "");
assert.sameValue(#[1].toString(), "1");
assert.sameValue(#[1,2].toString(), "1,2");

// if join method isn't callable, Object.toString should be called
Tuple.prototype.join = 7;
var t = #[1,2,3];
assert.sameValue(t.toString(), "[object Tuple]");


