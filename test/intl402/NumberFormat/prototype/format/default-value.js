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

const nf = new Intl.NumberFormat();
assert.sameValue(nf.format(), NaN);
assert.sameValue(nf.format(undefined), NaN);
