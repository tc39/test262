// Copyright 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.getCollations
description: >
  u-co extension keyword and collation option override language lookup
info: |
  CollationsOfLocale ( loc )

  1. If _loc_.[[Collation]] is not *undefined*, then
    a. Return CreateArrayFromList(« _loc_.[[Collation]] »).
features: [Intl.Locale,Intl.Locale-info]
locale: [en, de, zh]
---*/

const testCases = [
  ["en", "phonebk"],
  ["de", "phonebk"],
  ["zh", "stroke"],
  ["und", "pinyin"],
  ["und", "emoji"],
];

for (const [tag, collation] of testCases) {
  assert.compareArray(
    new Intl.Locale(`${tag}-u-co-${collation}`).getCollations(),
    [collation],
    `getCollations() for ${tag}-u-co-${collation} returns only ${collation}`
  );

  assert.compareArray(
    new Intl.Locale(tag, { collation }).getCollations(),
    [collation],
    `getCollations() for ${tag} with { collation: "${collation}" } returns only ${collation}`
  );
}
