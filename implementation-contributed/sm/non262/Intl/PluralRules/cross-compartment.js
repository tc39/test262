// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-PluralRules-shell.js
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

var pluralRules = new Intl.PluralRules();
var ccwPluralRules = new otherGlobal.Intl.PluralRules();

// Test Intl.PluralRules.prototype.select with a CCW object.
var Intl_PluralRules_select = Intl.PluralRules.prototype.select;

assert.sameValue(Intl_PluralRules_select.call(ccwPluralRules, 0),
         Intl_PluralRules_select.call(pluralRules, 0));

// Test Intl.PluralRules.prototype.resolvedOptions with a CCW object.
var Intl_PluralRules_resolvedOptions = Intl.PluralRules.prototype.resolvedOptions;

assert.sameValue(deepEqual(Intl_PluralRules_resolvedOptions.call(ccwPluralRules),
                   Intl_PluralRules_resolvedOptions.call(pluralRules)),
         true);

