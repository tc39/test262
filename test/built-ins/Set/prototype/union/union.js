// Copyright (C) 2023 Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union combines Sets
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.union,
  "function",
  "`typeof Set.prototype.union` is `'function'`"
);

verifyNotEnumerable(Set.prototype, "union");
verifyWritable(Set.prototype, "union");
verifyConfigurable(Set.prototype, "union");
