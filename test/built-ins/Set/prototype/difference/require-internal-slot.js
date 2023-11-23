// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.difference
description: Set.prototype.difference RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const difference = Set.prototype.difference;

assert.sameValue(typeof difference, "function");

assert.throws(TypeError, () => difference.call(undefined), "undefined");
assert.throws(TypeError, () => difference.call(null), "null");
assert.throws(TypeError, () => difference.call(true), "true");
assert.throws(TypeError, () => difference.call(""), "empty string");
assert.throws(TypeError, () => difference.call(Symbol()), "symbol");
assert.throws(TypeError, () => difference.call(1), "1");
assert.throws(TypeError, () => difference.call(1n), "1n");
assert.throws(TypeError, () => difference.call({}), "plain object");
assert.throws(TypeError, () => difference.call([]), "array");
assert.throws(TypeError, () => difference.call(new Map()), "map");
assert.throws(TypeError, () => difference.call(Set.prototype), "Set.prototype");
