// Copyright 2025 Google Inc, Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.with
description: Test `with` with Chinese calendar
features: [Temporal]
---*/

const testChineseData = new Date("2001-02-01T00:00Z").toLocaleString("en-US-u-ca-chinese", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  era: "short",
  timeZone: "UTC"
});
const hasOutdatedChineseIcuData = !testChineseData.endsWith("2001");

const calendar = "chinese";

const chineseYearOffset = new Temporal.PlainDate(1, 1, 1, calendar).year;

const cases = {
  year2000: {
    year: 1999 + chineseYearOffset,
    month: 11,
    monthCode: "M11",
    day: 25
  },
  year1900: {
    year: 1899 + chineseYearOffset,
    month: 12,
    monthCode: "M11",
    day: 1
  },
  year2100: {
    year: 2099 + chineseYearOffset,
    month: 11,
    day: 21
  }
};
const dates = {
  year2000: Temporal.PlainDate.from("2000-01-01"),
  year1900: Temporal.PlainDate.from("1900-01-01"),
  year2100: Temporal.PlainDate.from("2100-01-01")
};
for (var [name, result] of Object.entries(cases)) {
  if (hasOutdatedChineseIcuData) {
    continue;
  }
  const date = dates[name];
  const inCal = date.withCalendar(calendar);

  const afterWithDay = inCal.with({ day: 1 });
  assert.sameValue(afterWithDay.year, inCal.year, `${name} (after setting day)`);
  assert.sameValue(afterWithDay.month, inCal.month, `${name} (after setting day)`);
  assert.sameValue(afterWithDay.day, 1, `${name} (after setting day)`);

  const afterWithMonth = afterWithDay.with({ month: 1 });
  assert.sameValue(afterWithMonth.year, inCal.year, `${name} (after setting month)`);
  assert.sameValue(afterWithMonth.month, 1, `${name} (after setting month)`);
  assert.sameValue(afterWithMonth.day, 1, `${name} (after setting month)`);

  const afterWithYear = afterWithMonth.with({ year: 2025 });
  assert.sameValue(afterWithYear.year, 2025, `${name} (after setting year)`);
  assert.sameValue(afterWithYear.month, 1, `${name} (after setting year)`);
  assert.sameValue(afterWithYear.day, 1, `${name} (after setting year)`);
}

