// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-intl.numberformat.prototype.resolvedoptions
description: order of property keys for the object returned by resolvedOptions()
features: [Intl.NumberFormat-v3]
includes: [compareArray.js]
---*/

let expected = [
    'locale',
    'numberingSystem',
    'style',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'useGrouping',
    'notation',
    'signDisplay',
    'roundingIncrement',
    'roundingMode',
    'roundingPriority',
    'trailingZeroDisplay'
];
assert.compareArray(
    Object.keys((new Intl.NumberFormat()).resolvedOptions()), expected,
    "keys of resolvedOptions() should be in the correct order");
