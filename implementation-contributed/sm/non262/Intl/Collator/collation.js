// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Collator-shell.js
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
// Collation can be set as Unicode locale extension or as a property.
{
  let c1 = new Intl.Collator("de", {usage: "sort"});
  let c2 = new Intl.Collator("de", {usage: "sort", collation: "phonebk"});
  let c3 = new Intl.Collator("de-u-co-phonebk", {usage: "sort"});

  assert.sameValue(c1.resolvedOptions().locale, "de");
  assert.sameValue(c2.resolvedOptions().locale, "de");
  assert.sameValue(c3.resolvedOptions().locale, "de-u-co-phonebk");

  assert.sameValue(c1.resolvedOptions().collation, "default");
  assert.sameValue(c2.resolvedOptions().collation, "phonebk");
  assert.sameValue(c3.resolvedOptions().collation, "phonebk");

  assert.sameValue(c1.compare("ä", "ae"), -1);
  assert.sameValue(c2.compare("ä", "ae"), 1);
  assert.sameValue(c3.compare("ä", "ae"), 1);
}

// Collation property overrides any Unicode locale extension.
{
  let c1 = new Intl.Collator("de-u-co-eor", {usage: "sort"});
  let c2 = new Intl.Collator("de-u-co-eor", {usage: "sort", collation: "phonebk"});

  // Ensure "eor" collation is supported.
  assert.sameValue(c1.resolvedOptions().locale, "de-u-co-eor");
  assert.sameValue(c1.resolvedOptions().collation, "eor");

  // "phonebk" property overrides the Unicode locale extension.
  assert.sameValue(c2.resolvedOptions().locale, "de");
  assert.sameValue(c2.resolvedOptions().collation, "phonebk");

  assert.sameValue(c1.compare("ä", "ae"), -1);
  assert.sameValue(c2.compare("ä", "ae"), 1);
}

// The default sort collation can't be requested.
{
  // The default sort collation for Swedish (sv) was "reformed" before CLDR 42.
  // It wasn't possible to override this and select the default root sort
  // collation. Use English (en) as a locale which uses the root sort collation
  // for comparison.
  let c1 = new Intl.Collator("sv", {usage: "sort"});
  let c2 = new Intl.Collator("sv-u-co-reformed", {usage: "sort"});
  let c3 = new Intl.Collator("sv-u-co-standard", {usage: "sort"});
  let c4 = new Intl.Collator("sv-u-co-default", {usage: "sort"});
  let c5 = new Intl.Collator("en", {usage: "sort"});

  assert.sameValue(c1.resolvedOptions().locale, "sv");
  assert.sameValue(c2.resolvedOptions().locale, "sv");
  assert.sameValue(c3.resolvedOptions().locale, "sv");
  assert.sameValue(c4.resolvedOptions().locale, "sv");
  assert.sameValue(c5.resolvedOptions().locale, "en");

  assert.sameValue(c1.resolvedOptions().collation, "default");
  assert.sameValue(c2.resolvedOptions().collation, "default");
  assert.sameValue(c3.resolvedOptions().collation, "default");
  assert.sameValue(c4.resolvedOptions().collation, "default");
  assert.sameValue(c5.resolvedOptions().collation, "default");

  assert.sameValue(c1.compare("y", "ü"), -1);
  assert.sameValue(c2.compare("y", "ü"), -1);
  assert.sameValue(c3.compare("y", "ü"), -1);
  assert.sameValue(c4.compare("y", "ü"), -1);
  assert.sameValue(c5.compare("y", "ü"), 1);
}

// Search collations ignore any collation overrides.
{
  let c1 = new Intl.Collator("de", {usage: "search"});
  let c2 = new Intl.Collator("de", {usage: "search", collation: "phonebk"});
  let c3 = new Intl.Collator("de-u-co-phonebk", {usage: "search"});

  assert.sameValue(c1.resolvedOptions().locale, "de");
  assert.sameValue(c2.resolvedOptions().locale, "de");
  assert.sameValue(c3.resolvedOptions().locale, "de");

  assert.sameValue(c1.resolvedOptions().collation, "default");
  assert.sameValue(c2.resolvedOptions().collation, "default");
  assert.sameValue(c3.resolvedOptions().collation, "default");

  assert.sameValue(c1.compare("ä", "ae"), 1);
  assert.sameValue(c2.compare("ä", "ae"), 1);
  assert.sameValue(c3.compare("ä", "ae"), 1);
}

