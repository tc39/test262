// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: BigInt.asIntN type coercion for bigint parameter
info: >
  BigInt.asIntN ( bits, bigint )

  2. Let bigint ? ToBigInt(bigint).

features: [BigInt, Symbol, arrow-function]
---*/

function MyError() {}

assert.sameValue(BigInt.asIntN(3, Object(10n)), 2n);
assert.sameValue(BigInt.asIntN(3, {valueOf:()=>10n}), 2n);
assert.throws(MyError, () => BigInt.asIntN(0, {valueOf(){throw new MyError();}}));
assert.throws(TypeError, () => BigInt.asIntN(0, undefined));
assert.throws(TypeError, () => BigInt.asIntN(0, null));
assert.sameValue(BigInt.asIntN(2, true), 1n);
assert.sameValue(BigInt.asIntN(2, false), 0n);
assert.throws(TypeError, () => BigInt.asIntN(0, 0));
assert.throws(SyntaxError, () => BigInt.asIntN(0, "foo"));
assert.sameValue(BigInt.asIntN(3, "10"), 2n);
assert.sameValue(BigInt.asIntN(4, "12345678901234567890003"), 3n);
assert.throws(TypeError, () => BigInt.asIntN(0, Symbol("1")));
