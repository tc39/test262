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
// Unicode BCP 47 locale identifiers don't support extlang subtags.
const invalid = [
    // Two letter language code followed by extlang subtags.
    "en-abc",
    "en-abc-def",
    "en-abc-def-ghi",

    // Three letter language code followed by extlang subtags.
    "und-abc",
    "und-abc-def",
    "und-abc-def-ghi",
];

for (let locale of invalid) {
    assertThrowsInstanceOf(() => Intl.getCanonicalLocales(locale), RangeError);
}

