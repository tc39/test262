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
// Tests the format function with a diverse set of locales and options.

var pr;

pr = new Intl.PluralRules("en-us");
assert.sameValue(pr.resolvedOptions().locale, "en-US");
assert.sameValue(pr.resolvedOptions().type, "cardinal");
assert.sameValue(pr.resolvedOptions().pluralCategories.length, 2);

pr = new Intl.PluralRules("de", {type: 'cardinal'});
assert.sameValue(pr.resolvedOptions().pluralCategories.length, 2);

pr = new Intl.PluralRules("de", {type: 'ordinal'});
assert.sameValue(pr.resolvedOptions().pluralCategories.length, 1);

