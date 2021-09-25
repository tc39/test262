// Copyright 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-intl.numberformat.prototype.format
description: When set to `500`, roundingIncrement is correctly applied
features: [Intl.NumberFormat-v3]
includes: [testIntl.js]
---*/

var locales = [
  new Intl.NumberFormat().resolvedOptions().locale, 'ar', 'de', 'th', 'ja'
];
var numberingSystems = ['arab', 'latn', 'thai', 'hanidec'];

testNumberFormat(
  locales,
  numberingSystems,
  {roundingIncrement: 500, maximumFractionDigits: 3},
  {
    '1.500': '1.5',
    '1.625': '1.5',
    '1.750': '2',
    '1.875': '2',
    '2.000': '2',
  }
);

testNumberFormat(
  locales,
  numberingSystems,
  {roundingIncrement: 500, maximumFractionDigits: 4},
  {
    '1.0500': '1.05',
    '1.0625': '1.05',
    '1.0750': '1.1',
    '1.0875': '1.1',
    '1.1000': '1.1',
  }
);
