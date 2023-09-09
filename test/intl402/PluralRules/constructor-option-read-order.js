/// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializepluralrules
description: Checks the order of option read.
features: [Intl.NumberFormat-v3]
---*/

let optionKeys =  Object.keys((new Intl.PluralRules()).resolvedOptions());
let opt = {};
let readKeys = new Array();
// For each item returned by resolvedOptions of default, add a getter
// to track the reading order.
optionKeys.forEach((property) =>
    Object.defineProperty(opt, property, {
        get() {
            readKeys[readKeys.length] = property;
            return undefined;
        },
    }));
let p = new Intl.PluralRules(undefined, opt);
assert.sameValue(
    'type,' +
    'minimumIntegerDigits,' +
    'minimumFractionDigits,' +
    'maximumFractionDigits,' +
    'roundingIncrement,' +
    'roundingMode,' +
    'roundingPriority,' +
    'trailingZeroDisplay',
    readKeys.toString());
