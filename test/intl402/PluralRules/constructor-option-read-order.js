/// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializepluralrules
description: Checks the order of option read.
features: [Intl.NumberFormat-v3]
includes: [compareArray.js]
---*/

let optionKeys = [
    // Inside InitializePluralRules
    "localeMatcher",
    "type",
    // Inside SetNumberFormatDigitOptions
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "roundingIncrement",
        "roundingMode",
        "roundingPriority",
        "trailingZeroDisplay",
    // End of SetNumberFormatDigitOptions
];
let expected = [
    "localeMatcher",
    "type",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "roundingIncrement",
    "roundingMode",
    "roundingPriority",
    "trailingZeroDisplay"
];
let readKeys = new Array();
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
let p = new Intl.PluralRules(undefined, opt);
assert.compareArray(readKeys, expected,
    "GetOption should be called in the correct order");
