// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.monthCode
description: monthCode should work for Chinese calendar leap dates
features: [Temporal]
---*/

const calendar = "chinese";

const monthDayCases = [
  {
    year: 2001,
    month: 5,
    monthCode: "M04L",
    day: 15
  },
  {
    year: 2000,
    month: 6,
    monthCode: "M06",
    day: 29
  },
];
for (var {monthCode, month, day, year} of monthDayCases) {
  const md = Temporal.PlainMonthDay.from({
    year,
    month,
    day,
    calendar
  });
  const isoString = md.toString();

  const mdFromIso = Temporal.PlainMonthDay.from(isoString);
  assert.sameValue(mdFromIso.toString(), isoString);
  assert.sameValue(md.monthCode, monthCode);
  assert.sameValue(md.day, day);

  const md2 = Temporal.PlainMonthDay.from({
    monthCode,
    day,
    calendar
  });
  assert.sameValue(md2.monthCode, monthCode);
  assert.sameValue(md2.day, day);
  assert.sameValue(md.equals(md2), true);

  assert.throws(RangeError, () => {
    Temporal.PlainMonthDay.from({
      monthCode: "M15",
      day: 1,
      calendar
    }, { overflow: "reject" });
  });

  assert.throws(RangeError, () => {
    Temporal.PlainMonthDay.from({
      monthCode: "M15",
      day: 1,
      calendar
    });
  });

  assert.throws(RangeError, () => {
    Temporal.PlainMonthDay.from({
      year,
      month: 15,
      day: 1,
      calendar
    }, { overflow: "reject" });
  });

  const constrained = Temporal.PlainMonthDay.from({
    year,
    month: 15,
    day: 1,
    calendar
  });
  assert.sameValue(constrained.monthCode, "M12");
}
