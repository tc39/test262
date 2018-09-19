// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number-format-functions
description: >
  Tests that the default value for the argument of
  Intl.NumberFormat.prototype.format (value) is undefined.
info: |
  11.1.4Number Format Functions

  3. If value is not provided, let value be undefined.
---*/

const localesList = [
  undefined,
  ['de'],
  ['th-u-nu-thai'],
  ['en'],
  ['ja-u-nu-jpanfin'],
  ['ar-u-nu-arab']
];
const optionsList = [
  undefined,
  { style: 'percent' },
  { style: 'currency', currency: 'EUR', currencyDisplay: 'symbol' },
  { style: 'currency', currency: 'IQD', currencyDisplay: 'symbol' },
  { style: 'currency', currency: 'KMF', currencyDisplay: 'symbol' },
  { style: 'currency', currency: 'CLF', currencyDisplay: 'symbol' },
  {
    useGrouping: false,
    minimumIntegerDigits: 3,
    minimumFractionDigits: 1,
    maximumFractionDigits: 3
  }
];

localesList.forEach(locales => {
  optionsList.forEach(options => {
    const nf = Intl.NumberFormat(locales, options);
    assert.sameValue(nf.format(), nf.format(undefined));
  });
});
