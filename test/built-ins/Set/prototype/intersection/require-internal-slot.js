// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.intersection
description: Set.prototype.intersection RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const intersection = Set.prototype.intersection;

assert.sameValue(typeof intersection, "function");

assert.throws(TypeError, () => intersection.call(undefined), "undefined");
assert.throws(TypeError, () => intersection.call(null), "null");
assert.throws(TypeError, () => intersection.call(true), "true");
assert.throws(TypeError, () => intersection.call(""), "empty string");
assert.throws(TypeError, () => intersection.call(Symbol()), "symbol");
assert.throws(TypeError, () => intersection.call(1), "1");
assert.throws(TypeError, () => intersection.call(1n), "1n");
assert.throws(TypeError, () => intersection.call({}), "plain object");
assert.throws(TypeError, () => intersection.call([]), "array");
assert.throws(TypeError, () => intersection.call(new Map()), "map");
assert.throws(TypeError, () => intersection.call(Set.prototype), "Set.prototype");
