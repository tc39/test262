// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.symmetricdifference
description: Set.prototype.symmetricDifference RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const symmetricDifference = Set.prototype.symmetricDifference;

assert.sameValue(typeof symmetricDifference, "function");

assert.throws(TypeError, () => symmetricDifference.call(undefined), "undefined");
assert.throws(TypeError, () => symmetricDifference.call(null), "null");
assert.throws(TypeError, () => symmetricDifference.call(true), "true");
assert.throws(TypeError, () => symmetricDifference.call(""), "empty string");
assert.throws(TypeError, () => symmetricDifference.call(Symbol()), "symbol");
assert.throws(TypeError, () => symmetricDifference.call(1), "1");
assert.throws(TypeError, () => symmetricDifference.call(1n), "1n");
assert.throws(TypeError, () => symmetricDifference.call({}), "plain object");
assert.throws(TypeError, () => symmetricDifference.call([]), "array");
assert.throws(TypeError, () => symmetricDifference.call(new Map()), "map");
assert.throws(TypeError, () => symmetricDifference.call(Set.prototype), "Set.prototype");
