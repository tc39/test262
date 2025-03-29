// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal types format correctly.
locale: [en]
features: [Temporal]
---*/

const dateFormatterShort = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeZone: "Pacific/Apia" });
const dateFormatterMedium = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "Pacific/Apia" });
const dateFormatterLong = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "Pacific/Apia" });
const dateFormatterFull = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeZone: "Pacific/Apia" });
const timeFormatterShort = new Intl.DateTimeFormat("en-US", { timeStyle: "short", timeZone: "Pacific/Apia" });
const timeFormatterMedium = new Intl.DateTimeFormat("en-US", { timeStyle: "medium", timeZone: "Pacific/Apia" });
const timeFormatterLong = new Intl.DateTimeFormat("en-US", { timeStyle: "long", timeZone: "Pacific/Apia" });
const timeFormatterFull = new Intl.DateTimeFormat("en-US", { timeStyle: "full", timeZone: "Pacific/Apia" });
const dateTimeFormatterShort = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short", timeZone: "Pacific/Apia" });
const dateTimeFormatterMedium = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "medium", timeZone: "Pacific/Apia" });
const dateTimeFormatterLong = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "long", timeZone: "Pacific/Apia" });
const dateTimeFormatterFull = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "full", timeZone: "Pacific/Apia" });
const dateTimeFormatterShortLong = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "long", timeZone: "Pacific/Apia" });
const dateTimeFormatterShortMedium = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium", timeZone: "Pacific/Apia" });
const dateTimeFormatterShortFull = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "full", timeZone: "Pacific/Apia" });
const dateTimeFormatterMediumLong = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "long", timeZone: "Pacific/Apia" });
const dateTimeFormatterMediumShort = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "Pacific/Apia" });
const dateTimeFormatterMediumFull = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "full", timeZone: "Pacific/Apia" });
const dateTimeFormatterLongMedium = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "medium", timeZone: "Pacific/Apia" });
const dateTimeFormatterLongShort = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "short", timeZone: "Pacific/Apia" });
const dateTimeFormatterLongFull = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "full", timeZone: "Pacific/Apia" });
const dateTimeFormatterFullMedium = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "medium", timeZone: "Pacific/Apia" });
const dateTimeFormatterFullShort = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short", timeZone: "Pacific/Apia" });
const dateTimeFormatterFullLong = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long", timeZone: "Pacific/Apia" });

const date = new Temporal.PlainDate(2021, 8, 4);
const datetime = new Temporal.PlainDateTime(2021, 8, 4, 0, 30, 45, 123, 456, 789);
const monthday = new Temporal.PlainMonthDay(8, 4, "gregory");
const yearmonth = new Temporal.PlainYearMonth(2021, 8, "gregory");
const time = new Temporal.PlainTime(0, 30, 45, 123, 456, 789);

// PlainDate

var dateResult = dateFormatterShort.format(date);
assert.sameValue(dateResult, "8/4/21", "plain date, dateStyle=short");
dateResult = dateFormatterMedium.format(date);
assert.sameValue(dateResult, "Aug 4, 2021", "plain date, dateStyle=medium");
dateResult = dateFormatterLong.format(date);
assert.sameValue(dateResult, "August 4, 2021", "plain date, dateStyle=long");
dateResult = dateFormatterFull.format(date);
assert.sameValue(dateResult, "Wednesday, August 4, 2021", "plain date, dateStyle=full");
assert.throws(TypeError, () => timeFormatterShort.format(date), "plain date, timeStyle=short");
assert.throws(TypeError, () => timeFormatterMedium.format(date), "plain date, timeStyle=medium");
assert.throws(TypeError, () => timeFormatterLong.format(date), "plain date, timeStyle=long");
assert.throws(TypeError, () => timeFormatterFull.format(date), "plain date, timeStyle=full");
dateResult = dateTimeFormatterShort.format(date);
assert.sameValue(dateResult, "8/4/21", "plain date, dateStyle = timeStyle = short");
dateResult = dateTimeFormatterMedium.format(date);
assert.sameValue(dateResult, "Aug 4, 2021", "plain date, dateStyle = timeStyle = medium");
dateResult = dateTimeFormatterLong.format(date);
assert.sameValue(dateResult, "August 4, 2021", "plain date, dateStyle = timeStyle = long");
dateResult = dateTimeFormatterFull.format(date);
assert.sameValue(dateResult, "Wednesday, August 4, 2021", "plain date, dateStyle = timeStyle = full");
dateResult = dateTimeFormatterShortLong.format(date);
assert.sameValue(dateResult, "8/4/21", "plain date, dateStyle = short, timeStyle = long");

// PlainDateTime

var datetimeResult = dateFormatterShort.format(datetime);
assert.sameValue(datetimeResult, "8/4/21", "plain datetime, dateStyle=short");
datetimeResult = dateFormatterMedium.format(datetime);
assert.sameValue(datetimeResult, "Aug 4, 2021", "plain datetime, dateStyle=medium");
datetimeResult = dateFormatterLong.format(datetime);
assert.sameValue(datetimeResult, "August 4, 2021", "plain datetime, dateStyle=long");
datetimeResult = dateFormatterFull.format(datetime);
assert.sameValue(datetimeResult, "Wednesday, August 4, 2021", "plain datetime, dateStyle=full");
datetimeResult = timeFormatterShort.format(datetime);
assert.sameValue(datetimeResult, "12:30 AM", "plain datetime, timeStyle=short");
datetimeResult = timeFormatterMedium.format(datetime);
assert.sameValue(datetimeResult, "12:30:45 AM", "plain datetime, timeStyle=medium");
datetimeResult = timeFormatterLong.format(datetime);
assert.sameValue(datetimeResult, "12:30:45 AM", "plain datetime, timeStyle=long");
datetimeResult = timeFormatterFull.format(datetime);
assert.sameValue(datetimeResult, "12:30:45 AM", "plain datetime, timeStyle=full");
datetimeResult = dateTimeFormatterShort.format(datetime);
assert.sameValue(datetimeResult, "8/4/21, 12:30 AM", "plain datetime, dateStyle = timeStyle = short");
datetimeResult = dateTimeFormatterMedium.format(datetime);
assert.sameValue(datetimeResult, "Aug 4, 2021, 12:30:45 AM", "plain datetime, dateStyle = timeStyle = medium");
datetimeResult = dateTimeFormatterLong.format(datetime);
assert.sameValue(datetimeResult, "August 4, 2021 at 12:30:45 AM", "plain datetime, dateStyle = timeStyle = long");
datetimeResult = dateTimeFormatterFull.format(datetime);
assert.sameValue(datetimeResult, "Wednesday, August 4, 2021 at 12:30:45 AM", "plain datetime, dateStyle = timeStyle = full");
datetimeResult = dateTimeFormatterShortLong.format(datetime);
assert.sameValue(datetimeResult, "8/4/2021, 12:30:45 AM", "plain datetime, dateStyle = short, timeStyle = long");
datetimeResult = dateTimeFormatterShortMedium.format(datetime);
assert.sameValue(datetimeResult, "8/4/21, 12:30:45 AM", "plain datetime, dateStyle = short, timeStyle = medium");
datetimeResult = dateTimeFormatterShortFull.format(datetime);
assert.sameValue(datetimeResult, "8/4/2021, 12:30:45 AM", "plain datetime, dateStyle = short, timeStyle = full");
datetimeResult = dateTimeFormatterMediumLong.format(datetime);
assert.sameValue(datetimeResult, "Aug 4, 2021, 12:30:45 AM", "plain datetime, dateStyle = medium, timeStyle = long");
datetimeResult = dateTimeFormatterMediumShort.format(datetime);
assert.sameValue(datetimeResult, "Aug 4, 2021, 12:30 AM", "plain datetime, dateStyle = medium, timeStyle = short");
datetimeResult = dateTimeFormatterMediumFull.format(datetime);
assert.sameValue(datetimeResult, "Aug 4, 2021, 12:30:45 AM", "plain datetime, dateStyle = medium, timeStyle = full");
datetimeResult = dateTimeFormatterLongMedium.format(datetime);
assert.sameValue(datetimeResult, "August 4, 2021 at 12:30:45 AM", "plain datetime, dateStyle = long, timeStyle = medium");
datetimeResult = dateTimeFormatterLongShort.format(datetime);
assert.sameValue(datetimeResult, "August 4, 2021 at 12:30 AM", "plain datetime, dateStyle = long, timeStyle = short");
datetimeResult = dateTimeFormatterLongFull.format(datetime);
assert.sameValue(datetimeResult, "August 4, 2021 at 12:30:45 AM", "plain datetime, dateStyle = long, timeStyle = full");
datetimeResult = dateTimeFormatterFullMedium.format(datetime);
assert.sameValue(datetimeResult, "Wednesday, August 4, 2021 at 12:30:45 AM", "plain datetime, dateStyle = full, timeStyle = medium");
datetimeResult = dateTimeFormatterFullShort.format(datetime);
assert.sameValue(datetimeResult, "Wednesday, August 4, 2021 at 12:30 AM", "plain datetime, dateStyle = full, timeStyle = short");
datetimeResult = dateTimeFormatterFullLong.format(datetime);
assert.sameValue(datetimeResult, "Wednesday, August 4, 2021 at 12:30:45 AM", "plain datetime, dateStyle = full, timeStyle = long");

// PlainMonthDay

var monthdayResult = dateFormatterShort.format(monthday);
assert.sameValue(monthdayResult, "8/4", "plain monthday, dateStyle=short");
monthdayResult = dateFormatterMedium.format(monthday);
assert.sameValue(monthdayResult, "Aug 4", "plain monthday, dateStyle=medium");
monthdayResult = dateFormatterLong.format(monthday);
assert.sameValue(monthdayResult, "August 4", "plain monthday, dateStyle=long");
monthdayResult = dateFormatterFull.format(monthday);
assert.sameValue(monthdayResult, "August 4", "plain monthday, dateStyle=full");
assert.throws(TypeError, () => timeFormatterShort.format(monthday), "plain monthday, timeStyle=short");
assert.throws(TypeError, () => timeFormatterMedium.format(monthday), "plain monthday, timeStyle=medium");
assert.throws(TypeError, () => timeFormatterLong.format(monthday), "plain monthday, timeStyle=long");
assert.throws(TypeError, () => timeFormatterFull.format(monthday), "plain monthday, timeStyle=full");
monthdayResult = dateTimeFormatterShort.format(monthday);
assert.sameValue(monthdayResult, "8/4", "plain monthday, dateStyle = timeStyle = short");
monthdayResult = dateTimeFormatterMedium.format(monthday);
assert.sameValue(monthdayResult, "Aug 4", "plain monthday, dateStyle = timeStyle = medium");
monthdayResult = dateTimeFormatterLong.format(monthday);
assert.sameValue(monthdayResult, "August 4", "plain monthday, dateStyle = timeStyle = long");
monthdayResult = dateTimeFormatterFull.format(monthday);
assert.sameValue(monthdayResult, "August 4", "plain monthday, dateStyle = timeStyle = full");
monthdayResult = dateTimeFormatterShortLong.format(monthday);
assert.sameValue(monthdayResult, "8/4", "plain monthday, dateStyle = short, timeStyle = long");

// PlainYearMonth

var yearmonthResult = dateFormatterShort.format(yearmonth);
assert.sameValue(yearmonthResult, "8/21", "plain yearmonth, dateStyle=short");
yearmonthResult = dateFormatterMedium.format(yearmonth);
assert.sameValue(yearmonthResult, "Aug 2021", "plain yearmonth, dateStyle=medium");
yearmonthResult = dateFormatterLong.format(yearmonth);
assert.sameValue(yearmonthResult, "August 2021", "plain yearmonth, dateStyle=long");
yearmonthResult = dateFormatterFull.format(yearmonth);
assert.sameValue(yearmonthResult, "August 2021", "plain yearmonth, dateStyle=full");
assert.throws(TypeError, () => timeFormatterShort.format(yearmonth), "plain yearmonth, timeStyle=short");
assert.throws(TypeError, () => timeFormatterMedium.format(yearmonth), "plain yearmonth, timeStyle=medium");
assert.throws(TypeError, () => timeFormatterLong.format(yearmonth), "plain yearmonth, timeStyle=long");
assert.throws(TypeError, () => timeFormatterFull.format(yearmonth), "plain yearmonth, timeStyle=full");
yearmonthResult = dateTimeFormatterShort.format(yearmonth);
assert.sameValue(yearmonthResult, "8/21", "plain yearmonth, dateStyle = timeStyle = short");
yearmonthResult = dateTimeFormatterMedium.format(yearmonth);
assert.sameValue(yearmonthResult, "Aug 2021", "plain yearmonth, dateStyle = timeStyle = medium");
yearmonthResult = dateTimeFormatterLong.format(yearmonth);
assert.sameValue(yearmonthResult, "August 2021", "plain yearmonth, dateStyle = timeStyle = long");
yearmonthResult = dateTimeFormatterFull.format(yearmonth);
assert.sameValue(yearmonthResult, "August 2021", "plain yearmonth, dateStyle = timeStyle = full");
yearmonthResult = dateTimeFormatterShortLong.format(yearmonth);
assert.sameValue(yearmonthResult, "8/21", "plain yearmonth, dateStyle = short, timeStyle = long");

// PlainTime

assert.throws(TypeError, () => dateFormatterShort.format(time), "plain time, dateStyle=short");
assert.throws(TypeError, () => dateFormatterMedium.format(time), "plain time, dateStyle=medium");
assert.throws(TypeError, () => dateFormatterLong.format(time), "plain time, dateStyle=long");
var timeResult = timeFormatterShort.format(time);
assert.sameValue(timeResult, "12:30 AM", "plain time, dateStyle=short");
timeResult = timeFormatterMedium.format(time);
assert.sameValue(timeResult, "12:30:45 AM", "plain time, dateStyle=medium");
timeResult = timeFormatterLong.format(time);
assert.sameValue(timeResult, "12:30:45 AM", "plain time, dateStyle=long");
timeResult = dateTimeFormatterShort.format(time);
assert.sameValue(timeResult, "12:30 AM", "plain time, dateStyle = timeStyle = short");
timeResult = dateTimeFormatterMedium.format(time);
assert.sameValue(timeResult, "12:30:45 AM", "plain time, dateStyle = timeStyle = medium");
timeResult = dateTimeFormatterLong.format(time);
assert.sameValue(timeResult, "12:30:45 AM", "plain time, dateStyle = timeStyle = long");
timeResult = dateTimeFormatterFull.format(time);
assert.sameValue(timeResult, "12:30:45 AM", "plain time, dateStyle = timeStyle = full");
timeResult = dateTimeFormatterShortLong.format(time);
assert.sameValue(timeResult, "12:30:45 AM", "plain time, dateStyle = short, timeStyle = long");
