// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: Addition around end of month in non-ISO calendars
features: [Temporal, Intl.Era-monthcode]
includes: [temporalHelpers.js]
---*/

const options = { overflow: "reject" };

const months1 = new Temporal.Duration(0, -1);
const months1n = new Temporal.Duration(0, 1);
const months4 = new Temporal.Duration(0, -4);
const months4n = new Temporal.Duration(0, 4);
const months6 = new Temporal.Duration(0, -6);
const months6n = new Temporal.Duration(0, 6);
const durations = [
  months1,
  months1n,
  months4,
  months4n,
  months6,
  months6n,
];

const datesBuddhist = [
  Temporal.ZonedDateTime.from({ year: 2543, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "buddhist" }, options),
];

const datesChinese = [
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "chinese" }, options),
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M06", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "chinese" }, options),
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M11", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "chinese" }, options),
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M12", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "chinese" }, options),
  Temporal.ZonedDateTime.from({ year: 2000, monthCode: "M12", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "chinese" }, options),
];

const datesCoptic = [
  Temporal.ZonedDateTime.from({ year: 1716, monthCode: "M04", day: 22, hour: 12, minute: 34, timeZone: "UTC", calendar: "coptic" }, options),
];

const datesDangi = [
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "dangi" }, options),
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M06", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "dangi" }, options),
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M11", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "dangi" }, options),
  Temporal.ZonedDateTime.from({ year: 2019, monthCode: "M12", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "dangi" }, options),
  Temporal.ZonedDateTime.from({ year: 2000, monthCode: "M12", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "dangi" }, options),
];

const datesEthioaa = [
  Temporal.ZonedDateTime.from({ year: 7492, monthCode: "M04", day: 22, hour: 12, minute: 34, timeZone: "UTC", calendar: "ethioaa" }, options),
];

const datesEthiopic = [
  Temporal.ZonedDateTime.from({ year: 1992, monthCode: "M04", day: 22, hour: 12, minute: 34, timeZone: "UTC", calendar: "ethiopic" }, options),
];

const datesGregory = [
  Temporal.ZonedDateTime.from({ year: 2000, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "gregory" }, options),
];

const datesHebrew = [
  Temporal.ZonedDateTime.from({ year: 5760, monthCode: "M04", day: 23, hour: 12, minute: 34, timeZone: "UTC", calendar: "hebrew" }, options),
];

const datesIndian = [
  Temporal.ZonedDateTime.from({ year: 1921, monthCode: "M10", day: 11, hour: 12, minute: 34, timeZone: "UTC", calendar: "indian" }, options),
];

const datesIslamicCivil = [
  Temporal.ZonedDateTime.from({ year: 1420, monthCode: "M09", day: 24, hour: 12, minute: 34, timeZone: "UTC", calendar: "islamic-civil" }, options),
];

const datesIslamicTbla = [
  Temporal.ZonedDateTime.from({ year: 1420, monthCode: "M09", day: 25, hour: 12, minute: 34, timeZone: "UTC", calendar: "islamic-tbla" }, options),
];

const datesIslamicUmalqura = [
  Temporal.ZonedDateTime.from({ year: 1420, monthCode: "M09", day: 24, hour: 12, minute: 34, timeZone: "UTC", calendar: "islamic-umalqura" }, options),
];

const datesJapanese = [
  Temporal.ZonedDateTime.from({ year: 2000, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "japanese" }),
];

const datesPersian = [
  Temporal.ZonedDateTime.from({ year: 1378, monthCode: "M10", day: 11, hour: 12, minute: 34, timeZone: "UTC", calendar: "persian" }, options),
];

const datesRoc = [
  Temporal.ZonedDateTime.from({ year: 89, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar: "roc" }, options),
];

const dates = [datesBuddhist, datesChinese, datesCoptic, datesDangi, datesEthioaa, datesEthiopic, datesGregory,
  datesHebrew, datesIndian, datesIslamicCivil, datesIslamicTbla, datesIslamicUmalqura, datesJapanese,
  datesPersian, datesRoc].flat();

for (var duration of durations) {
  console.log(dates.toString());
  for (var start of dates) {
    const end = start.subtract(duration);

    // startYesterday = start - (1 day)
    const startYesterday = start.subtract({ days: 1 });
    // endYesterday = startYesterday + duration
    const endYesterday = startYesterday.subtract(duration);
    // When adding months, the result day should be the same
    // unless there are fewer days in the destination month than the source day
    assert.sameValue(endYesterday.day, Math.min(startYesterday.day, endYesterday.daysInMonth), "adding months should result in same day");

    // endYesterdayNextDay = endYesterday + (1 day)
    var endYesterdayNextDay = endYesterday.subtract({ days: -1 });
    // Move forward to next first-day-of-month
    while (endYesterdayNextDay.day !== 1) {
      endYesterdayNextDay = endYesterdayNextDay.subtract({ days: -1 });
    }

    TemporalHelpers.assertPlainDateTime(endYesterdayNextDay.toPlainDateTime(), end.year, end.month, end.monthCode, end.day, 12, 34, 0, 0, 0, 0, `endYesterdayNextDay`, end.era, end.eraYear);

    // endReverse should equal end
    const endReverse = endYesterdayNextDay.subtract({ days: 1 });
    const startReverse = endReverse.subtract(duration.negated());
    // subtracting months give the same day unless there are fewer days in the destination month
    assert.sameValue(startReverse.day, Math.min(endReverse.day, startReverse.daysInMonth));

    // Move forward to next first-day-of-month
    var startReverseNextDay = startReverse.subtract({ days: -1 });
    while(startReverseNextDay.day !== 1) {
      startReverseNextDay = startReverseNextDay.subtract({ days: -1 });
    }

    TemporalHelpers.assertPlainDateTime(startReverseNextDay.toPlainDateTime(), start.year, start.month, start.monthCode, start.day, 12, 34, 0, 0, 0, 0, `startReverseNextDay`, start.era, start.eraYear);
  }
}
