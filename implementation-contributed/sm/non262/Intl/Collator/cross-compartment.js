// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Collator-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
var otherGlobal = newGlobal();

var collator = new Intl.Collator();
var ccwCollator = new otherGlobal.Intl.Collator();

// Test Intl.Collator.prototype.compare with a CCW object.
var Intl_Collator_compare_get = Object.getOwnPropertyDescriptor(Intl.Collator.prototype, "compare").get;

assert.sameValue(Intl_Collator_compare_get.call(ccwCollator)("a", "A"),
         Intl_Collator_compare_get.call(collator)("a", "A"));

// Test Intl.Collator.prototype.resolvedOptions with a CCW object.
var Intl_Collator_resolvedOptions = Intl.Collator.prototype.resolvedOptions;

assert.sameValue(deepEqual(Intl_Collator_resolvedOptions.call(ccwCollator),
                   Intl_Collator_resolvedOptions.call(collator)),
         true);

