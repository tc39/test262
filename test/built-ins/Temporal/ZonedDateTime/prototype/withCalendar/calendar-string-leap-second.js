// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.withcalendar
description: Leap second is a valid ISO string for Calendar
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", {
  dateAdd() {},
  dateFromFields() {},
  dateUntil() {},
  day() {},
  dayOfWeek() {},
  dayOfYear() {},
  daysInMonth() {},
  daysInWeek() {},
  daysInYear() {},
  fields() {},
  id: "replace-me",
  inLeapYear() {},
  mergeFields() {},
  month() {},
  monthCode() {},
  monthDayFromFields() {},
  monthsInYear() {},
  weekOfYear() {},
  year() {},
  yearMonthFromFields() {},
  yearOfWeek() {},
});

const arg = "2016-12-31T23:59:60";
const result = instance.withCalendar(arg);
assert.sameValue(
  result.calendarId,
  "iso8601",
  "leap second is a valid ISO string for Calendar"
);
