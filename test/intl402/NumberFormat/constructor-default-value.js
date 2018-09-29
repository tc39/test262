// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: >
  Tests that the constructor for Intl.NumberFormat uses appropriate default
  values for its arguments (locales and options).
---*/

const actual = new Intl.NumberFormat();
const expected = new Intl.NumberFormat([], { __proto__: null });

assert.sameValue(actual.resolvedOptions(), expected.resolvedOptions());
