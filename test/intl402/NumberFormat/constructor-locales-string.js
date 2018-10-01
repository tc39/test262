// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: >
  Tests that passing a string value to the Intl.NumberFormat constructor is
  equivalent to passing an Array containing the same string value.
info: |
  9.2.1 CanonicalizeLocaleList ( locales )

  3 .If Type(locales) is String, then
    a. Let O be CreateArrayFromList(« locales »).
---*/

const actual = Intl.NumberFormat('en-US');
const expected = Intl.NumberFormat(['en-US']);

assert.sameValue(actual.resolvedOptions(), expected.resolvedOptions());
