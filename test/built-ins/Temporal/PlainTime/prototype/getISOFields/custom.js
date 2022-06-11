// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.getisofields
description: Properties added in correct order to object returned from getISOFields
features: [Temporal]
---*/

class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  year() {
    throw new Test262Error("Should not call 'year' method");
  }
  month() {
    throw new Test262Error("Should not call 'month' method");
  }
  monthCode() {
    throw new Test262Error("Should not call 'monthCode' method");
  }
  day() {
    throw new Test262Error("Should not call 'day' method");
  }
}

const calendar = new CustomCalendar();
const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321, calendar);
const result = instance.getISOFields();

assert.sameValue(result.isoHour, 12, "isoHour result");
assert.sameValue(result.isoMinute, 34, "isoMinute result");
assert.sameValue(result.isoSecond, 56, "isoSecond result");
assert.sameValue(result.isoMillisecond, 987, "isoMillisecond result");
assert.sameValue(result.isoMicrosecond, 654, "isoMicrosecond result");
assert.sameValue(result.isoNanosecond, 321, "isoNanosecond result");
assert.sameValue(result.calendar.id, "iso8601", "calendar result");
