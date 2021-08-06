// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.monthsinyear
description: Temporal.Calendar.prototype.monthsInYear will take Temporal.PlainDateTime
  object and return the number 12 for ISO8601 calendar.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
    a. Perform ? ToTemporalDate(temporalDateLike).
  5. Return 12𝔽.
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let dt = new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13);
assert.sameValue(cal.monthsInYear(dt), 12);
dt = new Temporal.PlainDateTime(1221, 8, 23, 5, 30, 13);
assert.sameValue(cal.monthsInYear(dt), 12);
