// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 11.3.3
description: >
    Tests that the object returned by
    Intl.NumberFormat.prototype.resolvedOptions  has the right
    properties.
author: Norbert Lindenberg
includes: [testIntl.js, propertyHelper.js]
---*/

var actual = new Intl.NumberFormat().resolvedOptions();

var actual2 = new Intl.NumberFormat().resolvedOptions();
assert.notSameValue(actual2, actual, "resolvedOptions returned the same object twice.");

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "numberingSystem", isValidNumberingSystem);
mustHaveProperty(actual, "style", ["decimal"]);
verifyProperty(actual, "currency", undefined);
verifyProperty(actual, "currencyDisplay", undefined);
mustHaveProperty(actual, "minimumIntegerDigits", [1]);
mustHaveProperty(actual, "minimumFractionDigits", [0]);
mustHaveProperty(actual, "maximumFractionDigits", [3]);
verifyProperty(actual, "minimumSignificantDigits", undefined);
verifyProperty(actual, "maximumSignificantDigits", undefined);
mustHaveProperty(actual, "useGrouping", [true]);
