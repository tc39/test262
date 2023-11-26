// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.issubsetof
description: Set.prototype.isSubsetOf RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const isSubsetOf = Set.prototype.isSubsetOf;

assert.sameValue(typeof isSubsetOf, "function");

assert.throws(TypeError, () => isSubsetOf.call(undefined), "undefined");
assert.throws(TypeError, () => isSubsetOf.call(null), "null");
assert.throws(TypeError, () => isSubsetOf.call(true), "true");
assert.throws(TypeError, () => isSubsetOf.call(""), "empty string");
assert.throws(TypeError, () => isSubsetOf.call(Symbol()), "symbol");
assert.throws(TypeError, () => isSubsetOf.call(1), "1");
assert.throws(TypeError, () => isSubsetOf.call(1n), "1n");
assert.throws(TypeError, () => isSubsetOf.call({}), "plain object");
assert.throws(TypeError, () => isSubsetOf.call([]), "array");
assert.throws(TypeError, () => isSubsetOf.call(new Map()), "map");
assert.throws(TypeError, () => isSubsetOf.call(Set.prototype), "Set.prototype");
