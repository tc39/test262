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
// <subdivisionAlias type="frg" replacement="frges" reason="deprecated"/>
assert.sameValue(Intl.getCanonicalLocales("fr-u-rg-frg")[0], "fr-u-rg-frges");
assert.sameValue(Intl.getCanonicalLocales("fr-u-sd-frg")[0], "fr-u-sd-frges");

// <subdivisionAlias type="frgf" replacement="GF" reason="overlong"/>
assert.sameValue(Intl.getCanonicalLocales("fr-u-rg-frgf")[0], "fr-u-rg-gfzzzz");
assert.sameValue(Intl.getCanonicalLocales("fr-u-sd-frgf")[0], "fr-u-sd-gfzzzz");

