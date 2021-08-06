// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.monthsinyear
description: Temporal.Calendar.prototype.monthsInYear will take Temporal.PlainDate
  and return the number 12 for ISO8601 calendar.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
    a. Perform ? ToTemporalDate(temporalDateLike).
  5. Return 12𝔽.
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let d = new Temporal.PlainDate(2021, 7, 15);
assert.sameValue(12, cal.monthsInYear(d), 12);
d = new Temporal.PlainDate(1234, 12, 3);
assert.sameValue(12, cal.monthsInYear(d), 12);
