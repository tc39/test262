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
// The IANA language subtag registry contains replacements for sign language
// codes marked as redundant. For example:
//
//   Type: redundant
//   Tag: sgn-DE
//   Description: German Sign Language
//   Added: 2001-11-11
//   Deprecated: 2009-07-29
//   Preferred-Value: gsg
//
// CLDR 38 added these mappings to CLDR, too.

assert.sameValue(Intl.getCanonicalLocales("sgn-DE")[0], "gsg");
assert.sameValue(Intl.getCanonicalLocales("sgn-DD")[0], "gsg");

assert.sameValue(Intl.getCanonicalLocales("sgn-276")[0], "gsg");
assert.sameValue(Intl.getCanonicalLocales("sgn-278")[0], "gsg");
assert.sameValue(Intl.getCanonicalLocales("sgn-280")[0], "gsg");

