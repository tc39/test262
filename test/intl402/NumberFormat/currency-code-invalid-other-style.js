// Copyright 2012-2019 Mozilla Corporation, Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: Tests that invalid currency codes are accepted for other styles.
---*/

var styles = [
    undefined,
    "decimal",
    "percent",
];

var invalidCurrencyCodes = [
    "",
    "€",
    "$",
    "SFr.",
    "DM",
    "KR₩",
    "702",
    "ßP",
    "ınr"
];

invalidCurrencyCodes.forEach(function (code) {
    styles.forEach(function (style) {
        var format = new Intl.NumberFormat(["de-de"], {style: style, currency: code});
        assert.sameValue(typeof format, "object");
    });
});
