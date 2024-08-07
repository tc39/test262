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
// Unicode locale extension sequences don't allow keys with a digit as their
// second character.
assertThrowsInstanceOf(() => Intl.getCanonicalLocales("en-u-c0"), RangeError);
assertThrowsInstanceOf(() => Intl.getCanonicalLocales("en-u-00"), RangeError);

// The first character is allowed to be a digit.
assert.sameValue(Intl.getCanonicalLocales("en-u-0c")[0], "en-u-0c");

