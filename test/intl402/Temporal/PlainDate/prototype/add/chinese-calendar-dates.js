// Copyright 2025 Google Inc, Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.add
description: Add duration with various units and calculate correctly
features: [Temporal]
---*/

const calendar = "chinese";

const chineseYearOffset = new Temporal.PlainDate(1, 1, 1, calendar).year;

const testChineseData = new Date("2001-02-01T00:00Z").toLocaleString("en-US-u-ca-chinese", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  era: "short",
  timeZone: "UTC"
});
const hasOutdatedChineseIcuData = !testChineseData.endsWith("2001");

const durationCases = {
  days: {
    duration: { days: 280 },
    result: {
      year: 2000 + chineseYearOffset,
      month: 10,
      monthCode: "M10",
      day: 16,
    },
    startDate: {
      year: 2000 + chineseYearOffset,
      month: 1,
      day: 1
    }
  },
  weeks: {
    duration: { weeks: 40 },
    result: {
      year: 2000 + chineseYearOffset,
      month: 10,
      monthCode: "M10",
      day: 16,
    },
    startDate: {
      year: 2000 + chineseYearOffset,
      month: 1,
      day: 1
    }
  },
  months: {
    duration: { months: 6 },
    result: {
      year: 2001 + chineseYearOffset,
      month: 6,
      monthCode: "M05",
      day: 1,
    },
    startDate: {
      year: 2000 + chineseYearOffset,
      month: 12,
      day: 1
    }
  },
  years: {
    duration: {
      years: 3,
      months: 6,
      days: 17
    },
    result: {
      year: 2001 + chineseYearOffset,
      month: 6,
      monthCode: "M05",
      day: 18,
    },
    startDate: {
      year: 1997 + chineseYearOffset,
      monthCode: "M12",
      day: 1
    }
  }
};
for (var [unit, {duration, result, startDate}] of Object.entries(durationCases)) {
  if (hasOutdatedChineseIcuData) {
    continue;
  }
  duration = Temporal.Duration.from(duration);

  const start = Temporal.PlainDate.from({
    ...startDate,
    calendar
  });

  const end = start.add(duration);
  assert.sameValue(end.era, result.era, `${unit}`);
  assert.sameValue(end.eraYear, result.eraYear, `${unit}`);
  assert.sameValue(end.year, result.year, `${unit}`);
  assert.sameValue(end.month, result.month, `${unit}`);
  assert.sameValue(end.monthCode, result.monthCode, `${unit}`);
  assert.sameValue(end.day, result.day, `${unit}`);

  if (unit === "months") {
    const startYesterday = start.subtract({ days: 1 });
    const endYesterday = startYesterday.add(duration);
    assert.sameValue(endYesterday.day, Math.min(startYesterday.day, endYesterday.daysInMonth), `${unit}`);

    var endYesterdayNextDay = endYesterday.add({ days: 1 });
    while (endYesterdayNextDay.day !== 1) {
      endYesterdayNextDay = endYesterdayNextDay.add({ days: 1 });
    }
    assert.sameValue(endYesterdayNextDay.era, result.era, `${unit}`);
    assert.sameValue(endYesterdayNextDay.eraYear, result.eraYear, `${unit}`);
    assert.sameValue(endYesterdayNextDay.year, result.year, `${unit}`);
    assert.sameValue(endYesterdayNextDay.month, result.month, `${unit}`);
    assert.sameValue(endYesterdayNextDay.monthCode, result.monthCode, `${unit}`);
    assert.sameValue(endYesterdayNextDay.day, result.day, `${unit}`);

    const endReverse = endYesterdayNextDay.subtract({ days: 1 });
    const startReverse = endReverse.subtract(duration);
    assert.sameValue(startReverse.day, Math.min(endReverse.day, startReverse.daysInMonth));

    var startReverseNextDay = startReverse.add({ days: 1 });
    while (startReverseNextDay.day !== 1) {
      startReverseNextDay = startReverseNextDay.add({ days: 1 });
    }
    assert.sameValue(startReverseNextDay.era, start.era, `${unit}`);
    assert.sameValue(startReverseNextDay.eraYear, start.eraYear, `${unit}`);
    assert.sameValue(startReverseNextDay.year, start.year, `${unit}`);
    assert.sameValue(startReverseNextDay.month, start.month, `${unit}`);
    assert.sameValue(startReverseNextDay.monthCode, start.monthCode, `${unit}`);
    assert.sameValue(startReverseNextDay.day, start.day, `${unit}`);
  }
}
