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
// For the most part the mappings from IANA are a subset of the CLDR mappings.
// So there are mappings which are consistent across both databases.
assert.sameValue(Intl.getCanonicalLocales("de-DD")[0], "de-DE");

// CLDR contains additional mappings:
//   <territoryAlias type="QU" replacement="EU" reason="deprecated"/>
//   <territoryAlias type="UK" replacement="GB" reason="deprecated"/>
assert.sameValue(Intl.getCanonicalLocales("und-QU")[0], "und-EU");
assert.sameValue(Intl.getCanonicalLocales("en-UK")[0], "en-GB");

// CLDR additional maps ISO 3166-1 numeric to ISO 3166-1 alpha-2 codes:
//   <territoryAlias type="280" replacement="DE" reason="deprecated"/>
//   <territoryAlias type="278" replacement="DE" reason="overlong"/>
//   <territoryAlias type="276" replacement="DE" reason="overlong"/>
assert.sameValue(Intl.getCanonicalLocales("de-280")[0], "de-DE");
assert.sameValue(Intl.getCanonicalLocales("de-278")[0], "de-DE");
assert.sameValue(Intl.getCanonicalLocales("de-276")[0], "de-DE");

