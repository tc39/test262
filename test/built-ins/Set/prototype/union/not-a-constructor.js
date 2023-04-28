// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union does not implement [[Construct]], is not new-able
includes: [isConstructor.js]
features: [Reflect.construct]
---*/

assert.sameValue(
  isConstructor(Set.prototype.union),
  false,
  "isConstructor(Set.prototype.union) must return false"
);

assert.throws(
  TypeError,
  () => {
    new Set.prototype.union();
  },
  "`new Set.prototype.union()` throws TypeError"
);
