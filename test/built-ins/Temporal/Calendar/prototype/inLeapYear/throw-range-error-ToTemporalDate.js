// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.inLeapYear
description: Temporal.Calendar.prototype.inLeapYear throws RangeError on
  ToTemporalDate when temporalDateLike is invalid string.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike
     does not have an [[InitializedTemporalDate]] or
     [[InitializedTemporalYearMonth]] internal slot, then
    a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.throws(RangeError, () => cal.inLeapYear("invalid string"),
    "Throw RangeError if temporalDateLike is invalid");
