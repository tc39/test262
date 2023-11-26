// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.isdisjointfrom
description: Set.prototype.isDisjointFrom RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const isDisjointFrom = Set.prototype.isDisjointFrom;

assert.sameValue(typeof isDisjointFrom, "function");

assert.throws(TypeError, () => isDisjointFrom.call(undefined), "undefined");
assert.throws(TypeError, () => isDisjointFrom.call(null), "null");
assert.throws(TypeError, () => isDisjointFrom.call(true), "true");
assert.throws(TypeError, () => isDisjointFrom.call(""), "empty string");
assert.throws(TypeError, () => isDisjointFrom.call(Symbol()), "symbol");
assert.throws(TypeError, () => isDisjointFrom.call(1), "1");
assert.throws(TypeError, () => isDisjointFrom.call(1n), "1n");
assert.throws(TypeError, () => isDisjointFrom.call({}), "plain object");
assert.throws(TypeError, () => isDisjointFrom.call([]), "array");
assert.throws(TypeError, () => isDisjointFrom.call(new Map()), "map");
assert.throws(TypeError, () => isDisjointFrom.call(Set.prototype), "Set.prototype");
