// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.getisofields
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
const instance = new Temporal.PlainDate(2000, 5, 2, calendar);
const result = instance.getISOFields();

assert.sameValue(result.isoYear, 2000, "isoYear result");
assert.sameValue(result.isoMonth, 5, "isoMonth result");
assert.sameValue(result.isoDay, 2, "isoDay result");
assert.sameValue(result.calendar, calendar, "calendar result");
