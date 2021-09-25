// Copyright 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-intl.numberformat.prototype.format
description: >
  When roungingPriority is "lessPrecision", the constraint which produces the
  less precise result is preferred
features: [Intl.NumberFormat-v3]
includes: [testIntl.js]
---*/

var locales = [
  new Intl.NumberFormat().resolvedOptions().locale, 'ar', 'de', 'th', 'ja'
];
var numberingSystems = ['arab', 'latn', 'thai', 'hanidec'];

// minimumSignificantDigits is less precise
testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', minimumSignificantDigits: 2, minimumFractionDigitsDigits: 2},
  {'1': '1.0'}
);

// minimumSignificantDigits is more precise
testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', minimumSignificantDigits: 3, minimumFractionDigitsDigits: 2},
  {'1': '1.0'}
);

// maximumSignificantDigits is less precise
testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', maximumSignificantDigits: 2, maximumFractionDigitsDigits: 2},
  {'1.23': '1.2'}
);

// maximumSignificantDigits is more precise
testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', maximumSignificantDigits: 3, maximumFractionDigitsDigits: 1},
  {'1.234': '1.2'}
);
