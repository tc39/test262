// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.collator.prototype.compare
description: >
  Bound compare function is stored in the Intl.Collator instance
info: |
  get Intl.Collator.prototype.compare

  ...
  3. If collator.[[BoundCompare]] is undefined, then
    a. Let F be a new built-in function object as defined in 10.3.3.1.
    ...
    c. Set collator.[[BoundCompare]] to F.
  4. Return collator.[[BoundCompare]].
---*/

var collator = new Intl.Collator();
var compare = collator.compare;

assert.sameValue(
  typeof compare,
  "function",
  "compare getter returns a function object"
);

assert.sameValue(
  collator.compare,
  compare,
  "compare getter returns the same bound compare function"
);

var otherCollator = new Intl.Collator().compare;

assert.notSameValue(
  otherCollator.compare,
  compare,
  "compare functions are bound to a single collator"
);
