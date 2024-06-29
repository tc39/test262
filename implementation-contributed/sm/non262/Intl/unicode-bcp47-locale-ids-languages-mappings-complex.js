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
// CLDR contains language mappings where in addition to the language subtag also
// the script or region subtag is modified, unless they're already present.

// <languageAlias type="sh" replacement="sr_Latn" reason="legacy"/>
assert.sameValue(Intl.getCanonicalLocales("sh")[0], "sr-Latn");
assert.sameValue(Intl.getCanonicalLocales("sh-RS")[0], "sr-Latn-RS");
assert.sameValue(Intl.getCanonicalLocales("sh-Cyrl")[0], "sr-Cyrl");

// <languageAlias type="cnr" replacement="sr_ME" reason="legacy"/>
assert.sameValue(Intl.getCanonicalLocales("cnr")[0], "sr-ME");
assert.sameValue(Intl.getCanonicalLocales("cnr-Latn")[0], "sr-Latn-ME");
assert.sameValue(Intl.getCanonicalLocales("cnr-RS")[0], "sr-RS");

// Aliases where more than just a language subtag are present are ignored.
// <languageAlias type="sr_RS" replacement="sr_Cyrl_RS" reason="legacy"/>
assert.sameValue(Intl.getCanonicalLocales("sr-RS")[0], "sr-RS");

