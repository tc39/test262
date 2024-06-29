// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-String-shell.js
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
// Test language dependent special casing with different language tags.
for (let locale of ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"]) {
    assert.sameValue("\u0130".toLocaleLowerCase(locale), "i");
    assert.sameValue("\u0130".toLocaleLowerCase([locale]), "i");

    // Additional language tags are ignored.
    assert.sameValue("\u0130".toLocaleLowerCase([locale, "und"]), "i");
    assert.sameValue("\u0130".toLocaleLowerCase(["und", locale]), "\u0069\u0307");
}

// Ensure "trl" (Traveller Scottish) isn't misrecognized as "tr", even though
// both share the same prefix.
assert.sameValue("\u0130".toLocaleLowerCase("trl"), "\u0069\u0307");
assert.sameValue("\u0130".toLocaleLowerCase(["trl"]), "\u0069\u0307");

// Language tag is always verified.
for (let locale of ["no_locale", "tr-invalid_ext", ["no_locale"], ["en", "no_locale"]]) {
    // Empty input string.
    assertThrowsInstanceOf(() => "".toLocaleLowerCase(locale), RangeError);

    // Non-empty input string.
    assertThrowsInstanceOf(() => "x".toLocaleLowerCase(locale), RangeError);
}

// No locale argument, undefined as locale, and empty array or array-like all
// return the same result. Testing with "a/A" because it has only simple case
// mappings.
assert.sameValue("A".toLocaleLowerCase(), "a");
assert.sameValue("A".toLocaleLowerCase(undefined), "a");
assert.sameValue("A".toLocaleLowerCase([]), "a");
assert.sameValue("A".toLocaleLowerCase({}), "a");
assert.sameValue("A".toLocaleLowerCase({length: 0}), "a");
assert.sameValue("A".toLocaleLowerCase({length: -1}), "a");

// Test with incorrect locale type.
for (let locale of [null, 0, Math.PI, NaN, Infinity, true, false, Symbol()]) {
    // Empty input string.
    assertThrowsInstanceOf(() => "".toLocaleLowerCase([locale]), TypeError);

    // Non-empty input string.
    assertThrowsInstanceOf(() => "A".toLocaleLowerCase([locale]), TypeError);
}

// Primitives are converted with ToObject and then queried for .length property.
for (let locale of [null]) {
    // Empty input string.
    assertThrowsInstanceOf(() => "".toLocaleLowerCase([locale]), TypeError);

    // Non-empty input string.
    assertThrowsInstanceOf(() => "A".toLocaleLowerCase([locale]), TypeError);
}
// ToLength(ToObject(<primitive>)) returns 0.
for (let locale of [0, Math.PI, NaN, Infinity, true, false, Symbol()]) {
    // Empty input string.
    assert.sameValue("".toLocaleLowerCase(locale), "");

    // Non-empty input string.
    assert.sameValue("A".toLocaleLowerCase(locale), "a");
}

