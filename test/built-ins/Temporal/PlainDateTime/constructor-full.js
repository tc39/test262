// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime
description: Checking an explicitly constructed instance with all arguments
features: [Temporal]
includes: [compareArray.js, temporalHelpers.js]
---*/

const calendar = Temporal.Calendar.from('iso8601');
const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar);

TemporalHelpers.assertPlainDateTime(datetime,
  1976, 11, 'M11', 18, 15, 23, 30, 123, 456, 789,
  "check instance (all arguments supplied)"
);

assert.sameValue(
  datetime.calendar,
  calendar,
  'calendar supplied in constructor can be extracted and is unchanged'
);

assert.compareArray(
  [datetime.dayOfWeek, datetime.dayOfYear, datetime.weekOfYear, datetime.daysInWeek, datetime.monthsInYear],
  [4, 323, 47, 7, 12],
  'check information derived from calendar'
);

assert.sameValue(
  `${datetime}`,
  '1976-11-18T15:23:30.123456789',
  'check string value'
);
