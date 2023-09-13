/// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: Checks the order of option read.
features: [Intl.NumberFormat-v3]
includes: [compareArray.js]
---*/

let optionKeys = [
    // Inside InitializeNumberFormat
    "localeMatcher",
    "numberingSystem",
    // Inside SetNumberFormatUnitOptions
        "style",
        "currency",
        "currencyDisplay",
        "currencySign",
        "unit",
        "unitDisplay",
    // End of SetNumberFormatUnitOptions
    // Back to InitializeNumberFormat
    "notation",
    // Inside SetNumberFormatDigitOptions
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "roundingPriority",
        "roundingIncrement",
        "roundingMode",
        "trailingZeroDisplay",
    // End of SetNumberFormatDigitOptions
    // Back to InitializeNumberFormat
    "compactDisplay",
    "useGrouping",
    "signDisplay"
];

let readKeys = new Array();
let expected = [
    'localeMatcher',
    'numberingSystem',
    'style',
    'currency',
    'currencyDisplay',
    'currencySign',
    'unit',
    'unitDisplay',
    'notation',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    'roundingIncrement',
    'roundingMode',
    'roundingPriority',
    'trailingZeroDisplay',
    'compactDisplay',
    'useGrouping',
    'signDisplay'
];
// For each item returned by resolvedOptions of default, add a getter
// to track the reading order.
let opt = {};
optionKeys.forEach((property) =>
    Object.defineProperty(opt, property, {
        get() {
            readKeys[readKeys.length] = property;
            return undefined;
        },
    }));
let p = new Intl.NumberFormat(undefined, opt);
assert.compareArray(readKeys, expected, "GetOption should be in the correct order");
