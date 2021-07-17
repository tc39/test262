// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.daysinweeks
description: Temporal.Calendar.prototype.daysInWeek will take different kind of object
  and return 7.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Perform ? ToTemporalDate(temporalDateLike).
  5. Return 7𝔽.
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(7, cal.daysInWeek(new Temporal.PlainDate(2021, 7, 15)));
assert.sameValue(7, cal.daysInWeek(new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)));
assert.sameValue(7, cal.daysInWeek("2019-03-18"));
