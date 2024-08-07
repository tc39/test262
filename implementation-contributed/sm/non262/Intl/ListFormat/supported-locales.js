// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-ListFormat-shell.js
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
// Intl.ListFormat.supportedLocalesOf returns an empty array for unsupported locales.
assert.sameValue(Intl.ListFormat.supportedLocalesOf("art-lobjan").length, 0);

// And a non-empty array for supported locales.
assert.sameValue(Intl.ListFormat.supportedLocalesOf("en").length, 1);
assert.sameValue(Intl.ListFormat.supportedLocalesOf("en")[0], "en");

// If the locale is supported per |Intl.ListFormat.supportedLocalesOf|, the resolved locale
// should reflect this.
for (let locale of Intl.ListFormat.supportedLocalesOf(["en", "de", "th", "ar"])) {
    let lf = new Intl.ListFormat(locale);
    assert.sameValue(lf.resolvedOptions().locale, locale);
}

