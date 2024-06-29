// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
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
// js/src/tests/lib/tests.py sets the default locale to "en-US" for shell tests.
// Ensure it's correctly set in the runtime and for the Intl service constructors.
const defaultLocale = "en-US";

assert.sameValue(getDefaultLocale(), defaultLocale);

assert.sameValue(new Intl.Collator().resolvedOptions().locale, defaultLocale);
assert.sameValue(new Intl.DateTimeFormat().resolvedOptions().locale, defaultLocale);
assert.sameValue(new Intl.NumberFormat().resolvedOptions().locale, defaultLocale);
assert.sameValue(new Intl.PluralRules().resolvedOptions().locale, defaultLocale);
assert.sameValue(new Intl.RelativeTimeFormat().resolvedOptions().locale, defaultLocale);

