// Copyright (C) 2025 Igalia, S.L. All rights reserved.
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
  const diff = start.until(end, { largestUnit: unit });
  assert.sameValue(diff.toString(), duration.toString(), `${unit}`);
}
