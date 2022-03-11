// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindatetime.prototype.daysinweek
description: Checking days in week for a "normal" case (non-undefined, non-boundary case, etc.)
features: [Temporal]
---*/

const calendar = Temporal.Calendar.from("iso8601");
const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar);
assert.sameValue(datetime.dayOfWeek, 4, "check day of week information");
