// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.withplaindate
description: If two non-ISO calendars are involved, an error is raised
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);

const cal = {
  id: 'foo',
  toString() { return "this is a string"; },
};

const anotherCal = {
  id: 'bar',
  toString() { return "this is another string"; },
};

assert.throws(
  RangeError,
  () => dt.withCalendar(cal).withPlainDate(new Temporal.PlainDate(2008, 9, 6, anotherCal)),
  "throws if both `this` and `other` have a non-ISO calendar"
);
