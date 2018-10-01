// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: >
  Tests that the Intl.NumberFormat constructor accepts Array-like values for the
  locales argument and treats them well.
---*/

const actual = Intl.NumberFormat({
  length: 1,
  1: 'en-US'
});
const expected = Intl.NumberFormat(['en-US']);

assert.sameValue(actual.resolvedOptions(), expected.resolvedOptions());
