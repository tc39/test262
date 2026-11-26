// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.datetimeformat.prototype.format
description: >
  Bound format function is stored in the Intl.DateTimeFormat instance
info: |
  get Intl.DateTimeFormat.prototype.format

  ...
  4. If dtf.[[BoundFormat]] is undefined, then
    a. Let F be a new built-in function object as defined in DateTime Format Functions (11.5.4).
    ...
    c. Set dtf.[[BoundFormat]] to F.
  5. Return dtf.[[BoundFormat]].
---*/

var dateTimeFormat = new Intl.DateTimeFormat();
var format = dateTimeFormat.format;

assert.sameValue(
  typeof format,
  "function",
  "format getter returns a function object"
);

assert.sameValue(
  dateTimeFormat.format,
  format,
  "format getter returns the same bound format function"
);

var otherDateTimeFormat = new Intl.DateTimeFormat().format;

assert.notSameValue(
  otherDateTimeFormat.format,
  format,
  "format functions are bound to a single date time formatter"
);
