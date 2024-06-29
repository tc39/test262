// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-RelativeTimeFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/const defaultLocale = "en";
const defaultNumberingSystem = new Intl.RelativeTimeFormat(defaultLocale).resolvedOptions().numberingSystem;

function createWithLocale(locale, numberingSystem) {
  return new Intl.RelativeTimeFormat(locale, {numberingSystem});
}

function create(numberingSystem) {
  return createWithLocale(defaultLocale, numberingSystem);
}

// Empty string should throw.
assertThrowsInstanceOf(() => create(""), RangeError);

// Trailing \0 should throw.
assertThrowsInstanceOf(() => create("latn\0"), RangeError);

// Too short or too long strings should throw.
assertThrowsInstanceOf(() => create("a"), RangeError);
assertThrowsInstanceOf(() => create("toolongstring"), RangeError);

// Throw even when prefix is valid.
assertThrowsInstanceOf(() => create("latn-toolongstring"), RangeError);

// |numberingSystem| can be set to |undefined|.
let nf = create(undefined);
assert.sameValue(nf.resolvedOptions().numberingSystem, defaultNumberingSystem);

// Unsupported numbering systems are ignored.
nf = create("xxxxxxxx");
assert.sameValue(nf.resolvedOptions().numberingSystem, defaultNumberingSystem);

// Numbering system in options overwrite Unicode extension keyword.
nf = createWithLocale(`${defaultLocale}-u-nu-thai`, "arab");
assert.sameValue(nf.resolvedOptions().locale, defaultLocale);
assert.sameValue(nf.resolvedOptions().numberingSystem, "arab");

// |numberingSystem| option ignores case.
nf = create("ARAB");
assert.sameValue(nf.resolvedOptions().locale, defaultLocale);
assert.sameValue(nf.resolvedOptions().numberingSystem, "arab");

for (let [numberingSystem, {algorithmic}] of Object.entries(numberingSystems)) {
  let nf1 = new Intl.RelativeTimeFormat(`${defaultLocale}-u-nu-${numberingSystem}`);
  let nf2 = new Intl.RelativeTimeFormat(defaultLocale, {numberingSystem});

  if (!algorithmic) {
    assert.sameValue(nf1.resolvedOptions().numberingSystem, numberingSystem);
    assert.sameValue(nf2.resolvedOptions().numberingSystem, numberingSystem);
  } else {
    // We don't yet support algorithmic numbering systems.
    assert.sameValue(nf1.resolvedOptions().numberingSystem, defaultNumberingSystem);
    assert.sameValue(nf2.resolvedOptions().numberingSystem, defaultNumberingSystem);
  }

  assert.sameValue(nf2.format(0, "second"), nf1.format(0, "second"));
}

