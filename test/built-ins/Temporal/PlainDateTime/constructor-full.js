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

assert.sameValue(datetime.dayOfWeek, 4, 'check day of week information');
assert.sameValue(datetime.dayOfYear, 323, 'check day of year information');
assert.sameValue(datetime.weekOfYear, 47, 'check week of year information');
assert.sameValue(datetime.daysInWeek, 7, 'check number of days in week');
assert.sameValue(datetime.monthsInYear, 12, 'check number of months in year');

assert.sameValue(
  `${datetime}`,
  '1976-11-18T15:23:30.123456789',
  'check string value'
);
