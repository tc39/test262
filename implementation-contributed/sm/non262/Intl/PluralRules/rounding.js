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
// The rounding mode defaults to half-up for both NumberFormat and PluralRules.

var locale = "en";
var options = {maximumFractionDigits: 0};

assert.sameValue(new Intl.NumberFormat(locale, options).format(0), "0");
assert.sameValue(new Intl.NumberFormat(locale, options).format(0.5), "1");
assert.sameValue(new Intl.NumberFormat(locale, options).format(1), "1");

assert.sameValue(new Intl.PluralRules(locale, options).select(0), "other");
assert.sameValue(new Intl.PluralRules(locale, options).select(0.5), "one");
assert.sameValue(new Intl.PluralRules(locale, options).select(1), "one");

