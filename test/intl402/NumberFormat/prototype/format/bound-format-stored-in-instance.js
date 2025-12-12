// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.numberformat.prototype.format
description: >
  Bound format function is stored in the Intl.NumberFormat instance
info: |
  get Intl.NumberFormat.prototype.format

  ...
  4. If nf.[[BoundFormat]] is undefined, then
    a. Let F be a new built-in function object as defined in Number Format Functions (16.5.2).
    ...
    c. Set nf.[[BoundFormat]] to F.
  5. Return nf.[[BoundFormat]].
---*/

var numberFormat = new Intl.NumberFormat();
var format = numberFormat.format;

assert.sameValue(
  typeof format,
  "function",
  "format getter returns a function object"
);

assert.sameValue(
  numberFormat.format,
  format,
  "format getter returns the same bound format function"
);

var otherNumberFormat = new Intl.NumberFormat().format;

assert.notSameValue(
  otherNumberFormat.format,
  format,
  "format functions are bound to a single number formatter"
);
