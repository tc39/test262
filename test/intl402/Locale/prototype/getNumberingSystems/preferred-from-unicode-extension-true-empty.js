// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.getNumberingSystems
description: >
  Returns the preferred numbering systems from the "nu" Unicode extension.
info: |
  NumberingSystemsOfLocale ( loc )
  1. If loc.[[NumberingSystem]] is not undefined, then
    a. Return CreateArrayFromList(« loc.[[NumberingSystem]] »).
  ...
features: [Intl.Locale, Intl.Locale-info]
---*/

const languages = [
  "und",
  "en",
];

const extensions = [
  "",
  "true",
];

for (let language of languages) {
  for (let extension of extensions) {
    let locale = extension
                 ? `${language}-u-nu-${extension}`
                 : `${language}-u-nu`;
    let loc = new Intl.Locale(locale);
    let numberingSystems = loc.getNumberingSystems();

    assert.sameValue(
      loc.numberingSystem,
      "",
      `numberingSystem with locale "${locale}"`
    );

    assert.compareArray(
      numberingSystems,
      [""],
      `numberingSystems with locale "${locale}"`
    );
  }
}
