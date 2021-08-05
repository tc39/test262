// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.weekofyear
description: Temporal.Calendar.prototype.weekofyear should throw from ToTemporalDate
  if temporalDateLike is invalid
  does not have [[InitializedTemporalCalendar]].
info: |
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.throws(RangeError, () => cal.weekOfYear("invalid iso8601"),
    "RangeError should be thrown by ToTemporalDate if temporalDateLike is not valid");
