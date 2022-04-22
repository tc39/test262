// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.getisofields
description: getISOFields returns an enumerable value
features: [Temporal]
---*/

const dt1 = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const fields = dt1.getISOFields();
const fields2 = { ...fields };

assert.sameValue(fields2.isoYear, 1976, "year");
assert.sameValue(fields2.isoMonth, 11, "month");
assert.sameValue(fields2.isoDay, 18, "month");
assert.sameValue(fields2.isoHour, 15, "hour");
assert.sameValue(fields2.isoMinute, 23, "minute");
assert.sameValue(fields2.isoSecond, 30, "second");
assert.sameValue(fields2.isoMillisecond, 123, "millisecond");
assert.sameValue(fields2.isoMicrosecond, 456, "microsecond");
assert.sameValue(fields2.isoNanosecond, 789, "nanosecond");
assert.sameValue(fields2.calendar.id, "iso8601", "calendar");
