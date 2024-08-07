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
assert.sameValue(Intl.getCanonicalLocales("iw")[0], "he");

// But some languages are mapped differently.
//
// From the IANA language data registry:
//   Type: language
//   Subtag: drh
//   Description: Darkhat
//   Added: 2009-07-29
//   Deprecated: 2010-03-11
//   Preferred-Value: khk
//
// From CLDR:
//   <languageAlias type="drh" replacement="mn" reason="deprecated"/>
//
// because CLDR also maps macro-languages:
//   <languageAlias type="khk" replacement="mn" reason="macrolanguage"/>
assert.sameValue(Intl.getCanonicalLocales("drh")[0], "mn");

// CLDR maps macro-languages:
//   <languageAlias type="cmn" replacement="zh" reason="macrolanguage"/>
assert.sameValue(Intl.getCanonicalLocales("cmn")[0], "zh");

// CLDR also contains mappings from ISO-639-2 (B/T) to 639-1 codes:
//   <languageAlias type="dut" replacement="nl" reason="bibliographic"/>
//   <languageAlias type="nld" replacement="nl" reason="overlong"/>
assert.sameValue(Intl.getCanonicalLocales("dut")[0], "nl");
assert.sameValue(Intl.getCanonicalLocales("nld")[0], "nl");

// CLDR has additional mappings for legacy language codes.
//   <languageAlias type="tl" replacement="fil" reason="legacy"/>
assert.sameValue(Intl.getCanonicalLocales("tl")[0], "fil");

