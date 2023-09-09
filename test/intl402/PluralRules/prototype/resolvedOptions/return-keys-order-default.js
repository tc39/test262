// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-intl.pluralrules.prototype.resolvedoptions
description: order of property keys for the object returned by resolvedOptions()
features: [Intl.NumberFormat-v3]
---*/

assert.sameValue(
    'locale,' +
    'type,' +
    'minimumIntegerDigits,' +
    'minimumFractionDigits,' +
    'maximumFractionDigits,' +
    'pluralCategories,' +
    'roundingIncrement,' +
    'roundingMode,' +
    'roundingPriority,' +
    'trailingZeroDisplay',
    Object.keys((new Intl.PluralRules()).resolvedOptions()).toString());
