// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.issupersetof
description: Set.prototype.isSupersetOf RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const isSupersetOf = Set.prototype.isSupersetOf;

assert.sameValue(typeof isSupersetOf, "function");

assert.throws(TypeError, () => isSupersetOf.call(undefined), "undefined");
assert.throws(TypeError, () => isSupersetOf.call(null), "null");
assert.throws(TypeError, () => isSupersetOf.call(true), "true");
assert.throws(TypeError, () => isSupersetOf.call(""), "empty string");
assert.throws(TypeError, () => isSupersetOf.call(Symbol()), "symbol");
assert.throws(TypeError, () => isSupersetOf.call(1), "1");
assert.throws(TypeError, () => isSupersetOf.call(1n), "1n");
assert.throws(TypeError, () => isSupersetOf.call({}), "plain object");
assert.throws(TypeError, () => isSupersetOf.call([]), "array");
assert.throws(TypeError, () => isSupersetOf.call(new Map()), "map");
assert.throws(TypeError, () => isSupersetOf.call(Set.prototype), "Set.prototype");
