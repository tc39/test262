// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.add
description: >
  Check various basic calculations not involving leap years or constraining
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const years1 = new Temporal.Duration(1);

const date20210716 = Temporal.PlainDate.from("2021-07-16");

TemporalHelpers.assertPlainDate(
    date20210716.add(years1),
    2022, 7, "M07", 16, "add 1y");

// Months

const months5 = new Temporal.Duration(0, 5);
const years1months2 = new Temporal.Duration(1, 2);

TemporalHelpers.assertPlainDate(
    date20210716.add(months5),
    2021, 12, "M12", 16, "add 5mo with result in the same year");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-08-16").add(months5),
    2022, 1, "M01", 16, "add 5mo with result in the next year");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2019-10-01").add(months5),
    2020, 3, "M03", 1, "add 5mo with result in the next year on day 1 of month");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-10-31").add(months5),
    2022, 3, "M03", 31, "add 5mo with result in the next year on day 31 of month");

TemporalHelpers.assertPlainDate(
    date20210716.add(years1months2),
    2022, 9, "M09", 16, "add 1y 2mo");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-11-30").add(years1months2),
    2023, 1, "M01", 30, "add 1y 2mo with result in the next year");

// Weeks

const weeks1 = new Temporal.Duration(0, 0, 1);
const weeks6 = new Temporal.Duration(0, 0, 6);
const years1weeks2 = new Temporal.Duration(1, 0, 2);
const months2weeks3 = new Temporal.Duration(0, 2, 3);

const date20201228 = Temporal.PlainDate.from("2020-12-28");
const date20210127 = Temporal.PlainDate.from("2021-01-27");
const date20210627 = Temporal.PlainDate.from("2021-06-27");
const date20210727 = Temporal.PlainDate.from("2021-07-27");
const date20211224 = Temporal.PlainDate.from("2021-12-24");

TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-02-19").add(weeks1),
    2021, 2, "M02", 26, "add 1w");
TemporalHelpers.assertPlainDate(
    date20211224.add(weeks1),
    2021, 12, "M12", 31, "add 1w with result on the last day of the year");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-12-25").add(weeks1),
    2022, 1, "M01", 1, "add 1w with result on the first day of the next year");

TemporalHelpers.assertPlainDate(
    date20210127.add(weeks1),
    2021, 2, "M02", 3, "add 1w in a 31-day month with result in the next month");
TemporalHelpers.assertPlainDate(
    date20210727.add(weeks1),
    2021, 8, "M08", 3, "add 1w in another 31-day month with result in the next month");
TemporalHelpers.assertPlainDate(
    date20210627.add(weeks1),
    2021, 7, "M07", 4, "add 1w in a 30-day month with result in the next month");

TemporalHelpers.assertPlainDate(
    date20210127.add(weeks6),
    2021, 3, "M03", 10, "add 6w with result in the same year");
TemporalHelpers.assertPlainDate(
    date20211224.add(weeks6),
    2022, 2, "M02", 4, "add 6w with result in the next year");
TemporalHelpers.assertPlainDate(
    date20210627.add(weeks6),
    2021, 8, "M08", 8, "add 6w crossing months of 30 and 31 days");
TemporalHelpers.assertPlainDate(
    date20210727.add(weeks6),
    2021, 9, "M09", 7, "add 6w crossing months of 31 and 31 days");

TemporalHelpers.assertPlainDate(
    date20201228.add(years1weeks2),
    2022, 1, "M01", 11, "add 1y 2w with result in the next year");

TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2019-10-28").add(months2weeks3),
    2020, 1, "M01", 18, "add 2mo 3w with result in the next year");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2019-10-31").add(months2weeks3),
    2020, 1, "M01", 21, "add 2mo 3w with result in the next year");

// Days

const days10 = new Temporal.Duration(0, 0, 0, 10);
const weeks2days3 = new Temporal.Duration(0, 0, 2, 3);
const years1months2days4 = new Temporal.Duration(1, 2, 0, 4);

TemporalHelpers.assertPlainDate(
    date20210716.add(days10),
    2021, 7, "M07", 26, "add 10 days with result in the same month");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-07-26").add(days10),
    2021, 8, "M08", 5, "add 10 days with result in the next month");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-12-26").add(days10),
    2022, 1, "M01", 5, "add 10 days with result in the next year");

TemporalHelpers.assertPlainDate(
    date20201228.add(weeks2days3),
    2021, 1, "M01", 14, "add 2w 3d with result in the next year");

TemporalHelpers.assertPlainDate(
    date20210716.add(years1months2days4),
    2022, 9, "M09", 20, "add 1y 2mo 4d");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-02-27").add(years1months2days4),
    2022, 5, "M05", 1, "add 1y 2mo 4d with result in a month following a 30-day month");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-07-30").add(years1months2days4),
    2022, 10, "M10", 4, "add 1y 2mo 4d with result in a month following a 30-day month");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-01-28").add(years1months2days4),
    2022, 4, "M04", 1, "add 1y 2mo 4d with result in a month following a 31-day month");
TemporalHelpers.assertPlainDate(
    Temporal.PlainDate.from("2021-06-30").add(years1months2days4),
    2022, 9, "M09", 3, "add 1y 2mo 4d with result in a month following a 31-day month");
