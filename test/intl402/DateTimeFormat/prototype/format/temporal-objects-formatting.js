// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal types format correctly.
locale: [en-US]
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

// PlainDate

const date = new Temporal.PlainDate(2021, 8, 4);

const dateShort = dateFormatterShort.format(date);
/*
  To avoid requiring an exact format for the output of locale-dependent functions,
  don't run these tests, but they're left here as documentation for what the output
  should roughly look like.
*/
// assert.sameValue(dateShort, "8/4/21", "plain date, dateStyle=short");
const dateMedium = dateFormatterMedium.format(date);
// assert.sameValue(dateMedium, "Aug 4, 2021", "plain date, dateStyle=medium");
const dateLong = dateFormatterLong.format(date);
// assert.sameValue(dateLong, "August 4, 2021", "plain date, dateStyle=long");
const dateFull = dateFormatterFull.format(date);
// assert.sameValue(dateFull, "Wednesday, August 4, 2021", "plain date, dateStyle=full");
assert.throws(TypeError, () => timeFormatterShort.format(date), "plain date, timeStyle=short");
assert.throws(TypeError, () => timeFormatterMedium.format(date), "plain date, timeStyle=medium");
assert.throws(TypeError, () => timeFormatterLong.format(date), "plain date, timeStyle=long");
assert.throws(TypeError, () => timeFormatterFull.format(date), "plain date, timeStyle=full");
var result = dateTimeFormatterShort.format(date);
assert.sameValue(result, dateShort, "plain date, dateStyle = timeStyle = short");
result = dateTimeFormatterMedium.format(date);
assert.sameValue(result, dateMedium, "plain date, dateStyle = timeStyle = medium");
result = dateTimeFormatterLong.format(date);
assert.sameValue(result, dateLong, "plain date, dateStyle = timeStyle = long");
result = dateTimeFormatterFull.format(date);
assert.sameValue(result, dateFull, "plain date, dateStyle = timeStyle = full");
result = dateTimeFormatterShortLong.format(date);
assert.sameValue(result, dateShort, "plain date, dateStyle = short, timeStyle = long");

// PlainDateTime

// Use a PlainDateTime with unique values in each field, so as to make it easier
// to test which values appear in the formatted output
const datetime = new Temporal.PlainDateTime(2222, 3, 4, 5, 6, 7, 888, 999, 111);

var datetimeResult = dateFormatterShort.format(datetime);
// assert.sameValue(datetimeResult, "3/4/22", "plain datetime, dateStyle=short");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle=short");

datetimeResult = dateFormatterMedium.format(datetime);
// assert.sameValue(datetimeResult, "Mar 4, 2222", "plain datetime, dateStyle=medium");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle=medium: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle=medium: day should appear");
assert.sameValue(datetimeResult.search("999"), -1, "plain datetime, dateStyle=medium: microseconds should not appear");

datetimeResult = dateFormatterLong.format(datetime);
// assert.sameValue(datetimeResult, "March 4, 2222", "plain datetime, dateStyle=long");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle=long: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle=long: day should appear");
assert.sameValue(datetimeResult.search("999"), -1, "plain datetime, dateStyle=long: nanoseconds should not appear");

datetimeResult = dateFormatterFull.format(datetime);
// assert.sameValue(datetimeResult, "Monday, March 4, 2222", "plain datetime, dateStyle=full");
assert.notSameValue(datetimeResult.search("Monday", -1, "plain datetime, dateStyle=full: day of week should appear"));
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle=full: day should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle=long: milliseconds should not appear");

datetimeResult = timeFormatterShort.format(datetime);
// assert.sameValue(datetimeResult, "5:06 AM", "plain datetime, timeStyle=short");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, timeStyle=short: month should not appear");
assert.sameValue(datetimeResult.search("4"), -1, "plain datetime, timeStyle=short: day should not appear");
assert.notSameValue(datetimeResult.search("5"), -1, "plain datetime, timeStyle=short: hour should appear");

datetimeResult = timeFormatterMedium.format(datetime);
// assert.sameValue(datetimeResult, "5:06:07 AM", "plain datetime, timeStyle=medium");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, timeStyle=medium: month should not appear");
assert.sameValue(datetimeResult.search("4"), -1, "plain datetime, timeStyle=medium: day should not appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, timeStyle=medium: seconds should appear");

datetimeResult = timeFormatterLong.format(datetime);
// assert.sameValue(datetimeResult, "5:06:07 AM", "plain datetime, timeStyle=long");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, timeStyle=long: month should not appear");
assert.sameValue(datetimeResult.search("4"), -1, "plain datetime, timeStyle=long: day should not appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, timeStyle=long: minutes should appear");

datetimeResult = timeFormatterFull.format(datetime);
// assert.sameValue(datetimeResult, "5:06:07 AM", "plain datetime, timeStyle=full");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, timeStyle=full: month should not appear");
assert.sameValue(datetimeResult.search("4"), -1, "plain datetime, timeStyle=full: day should not appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, timeStyle=full: seconds should appear");

datetimeResult = dateTimeFormatterShort.format(datetime);
// assert.sameValue(datetimeResult, "3/4/22, 5:06 AM", "plain datetime, dateStyle = timeStyle = short");
assert.notSameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = timeStyle = short: numeric month should appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = timeStyle = short: day should appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, dateStyle = timeStyle = short: minutes should appear");
assert.sameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = timeStyle = short: seconds should not appear");

datetimeResult = dateTimeFormatterLong.format(datetime);
// assert.sameValue(datetimeResult, "Mar 4, 2222, 5:06:07 AM", "plain datetime, dateStyle = timeStyle = medium");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = timeStyle = medium: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = timeStyle = medium: day should appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, dateStyle = timeStyle = medium: minutes should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = timeStyle = medium: seconds should appear");

datetimeResult = dateTimeFormatterLong.format(datetime);
// assert.sameValue(datetimeResult, "March 4, 2222 at 5:06:07 AM", "plain datetime, dateStyle = timeStyle = long");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = timeStyle = long: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = timeStyle = long: day should appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, dateStyle = timeStyle = long: minutes should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = timeStyle = long: seconds should appear");

datetimeResult = dateTimeFormatterFull.format(datetime);
// assert.sameValue(datetimeResult, "Monday, March 4, 2222 at 5:06:07 AM", "plain datetime, dateStyle = timeStyle = full");
assert.notSameValue(datetimeResult.search("Monday", -1, "plain datetime, dateStyle = timeStyle = full: day of week should appear"));
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = timeStyle = full: day should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = timeStyle = full: milliseconds should not appear");

datetimeResult = dateTimeFormatterShortLong.format(datetime);
// assert.sameValue(datetimeResult, "3/4/2222, 5:06:07 AM", "plain datetime, dateStyle = short, timeStyle = long");
assert.notSameValue(datetimeResult.search("2222", -1, "plain datetime, dateStyle = short, timeStyle = long: 4-digit year should appear"));
assert.notSameValue(datetimeResult.search("3", -1, "plain datetime, dateStyle = short, timeStyle = long: numeric month should appear"));
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = short, timeStyle = long: day should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = short, timeStyle = long: milliseconds should not appear");


datetimeResult = dateTimeFormatterShortMedium.format(datetime);
// assert.sameValue(datetimeResult, "3/4/22, 5:06:07 AM", "plain datetime, dateStyle = short, timeStyle = medium");
assert.sameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = short, timeStyle = medium: 4-digit year should not appear");
assert.notSameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = short, timeStyle = medium: numeric month should appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = short, timeStyle = medium: day should appear");
assert.sameValue(datetimeResult.search("111"), -1, "plain datetime, dateStyle = short, timeStyle = medium: nanoseconds should not appear");

datetimeResult = dateTimeFormatterShortFull.format(datetime);
// assert.sameValue(datetimeResult, "3/4/2222, 5:06:07 AM", "plain datetime, dateStyle = short, timeStyle = full");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = short, timeStyle = full: 4-digit year should appear");
assert.notSameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = short, timeStyle = full: numeric month should appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = short, timeStyle = full: day should appear");
assert.sameValue(datetimeResult.search("999"), -1, "plain datetime, dateStyle = short, timeStyle = full: microseconds should not appear");

datetimeResult = dateTimeFormatterMediumLong.format(datetime);
// assert.sameValue(datetimeResult, "Mar 4, 2222, 5:06:07 AM", "plain datetime, dateStyle = medium, timeStyle = long");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = medium, timeStyle = long: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = medium, timeStyle = long: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = medium, timeStyle = long: day should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = medium, timeStyle = long: milliseconds should not appear");

datetimeResult = dateTimeFormatterMediumShort.format(datetime);
// assert.sameValue(datetimeResult, "Mar 4, 2222, 5:06 AM", "plain datetime, dateStyle = medium, timeStyle = short");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = medium, timeStyle = short: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = medium, timeStyle = short: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = medium, timeStyle = short: day should appear");
assert.notSameValue(datetimeResult.search("5"), -1, "plain datetime, dateStyle = medium, timeStyle = short: hour should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = medium, timeStyle = short: milliseconds should not appear");

datetimeResult = dateTimeFormatterMediumFull.format(datetime);
// assert.sameValue(datetimeResult, "Mar 4, 2222, 5:06:07 AM", "plain datetime, dateStyle = medium, timeStyle = full");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = medium, timeStyle = full: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = medium, timeStyle = full: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = medium, timeStyle = full: day should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = medium, timeStyle = full: seconds should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = medium, timeStyle = full: milliseconds should not appear");

datetimeResult = dateTimeFormatterLongMedium.format(datetime);
// assert.sameValue(datetimeResult, "March 4, 2222 at 5:06:07 AM", "plain datetime, dateStyle = long, timeStyle = medium");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = long, timeStyle = medium: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = long, timeStyle = medium: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = long, timeStyle = medium: day should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = long, timeStyle = medium: seconds should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = long, timeStyle = medium: milliseconds should not appear");

datetimeResult = dateTimeFormatterLongShort.format(datetime);
// assert.sameValue(datetimeResult, "March 4, 2222 at 5:06 AM", "plain datetime, dateStyle = long, timeStyle = short");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = long, timeStyle = short: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = long, timeStyle = short: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = long, timeStyle = short: day should appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, dateStyle = long, timeStyle = short: minutes should appear");
assert.sameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = long, timeStyle = short: seconds should not appear");

datetimeResult = dateTimeFormatterLongFull.format(datetime);
// assert.sameValue(datetimeResult, "March 4, 2222 at 5:06:07 AM", "plain datetime, dateStyle = long, timeStyle = full");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = long, timeStyle = full: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = long, timeStyle = full: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = long, timeStyle = full: day should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = long, timeStyle = full: seconds should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = long, timeStyle = full: milliseconds should not appear");

datetimeResult = dateTimeFormatterFullMedium.format(datetime);
// assert.sameValue(datetimeResult, "Monday, March 4, 2222 at 5:06:07 AM", "plain datetime, dateStyle = full, timeStyle = medium");
assert.notSameValue(datetimeResult.search("Monday"), -1, "plain datetime, dateStyle = full, timeStyle = medium: day of week should appear");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = full, timeStyle = medium: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = full, timeStyle = medium: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = full, timeStyle = medium: day should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = full, timeStyle = medium: seconds should appear");
assert.sameValue(datetimeResult.search("999"), -1, "plain datetime, dateStyle = full, timeStyle = medium: microseconds should not appear");


datetimeResult = dateTimeFormatterFullShort.format(datetime);
// assert.sameValue(datetimeResult, "Monday, March 4, 2222 at 5:06 AM", "plain datetime, dateStyle = full, timeStyle = short");
assert.notSameValue(datetimeResult.search("Monday"), -1, "plain datetime, dateStyle = full, timeStyle = short: day of week should appear");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = full, timeStyle = short: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = full, timeStyle = short: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = full, timeStyle = short: day should appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, dateStyle = full, timeStyle = short: minutes should appear");
assert.sameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = full, timeStyle = short: seconds should not appear");

datetimeResult = dateTimeFormatterFullLong.format(datetime);
// assert.sameValue(datetimeResult, "Monday, March 4, 2222 at 5:06:07 AM", "plain datetime, dateStyle = full, timeStyle = long");
assert.notSameValue(datetimeResult.search("Monday"), -1, "plain datetime, dateStyle = full, timeStyle = long: day of week should appear");
assert.notSameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = full, timeStyle = long: 4-digit year should appear");
assert.sameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = full, timeStyle = long: numeric month should not appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = full, timeStyle = long: day should appear");
assert.notSameValue(datetimeResult.search("6"), -1, "plain datetime, dateStyle = full, timeStyle = long: minutes should appear");
assert.notSameValue(datetimeResult.search("7"), -1, "plain datetime, dateStyle = full, timeStyle = long: seconds should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = full, timeStyle = long: milliseconds should not appear");

// PlainMonthDay

// Use a reference year so we can check that it doesn't occur in any string output
const monthday = new Temporal.PlainMonthDay(3, 4, "gregory", 5678);

const monthdayResultShort = dateFormatterShort.format(monthday);
// assert.sameValue(monthdayResultShort, "3/4", "plain monthday, dateStyle=short");
assert.sameValue(monthdayResultShort.search("78"), -1, "plain monthday, dateStyle=short: year should not appear");
assert.notSameValue(monthdayResultShort.search("3"), -1, "plain monthday, dateStyle=short: month should appear");
assert.notSameValue(monthdayResultShort.search("4"), -1, "plain monthday, dateStyle=short: day should appear");

const monthdayResultMedium = dateFormatterMedium.format(monthday);
// assert.sameValue(monthdayResultMedium, "Mar 4", "plain monthday, dateStyle=medium");
assert.sameValue(monthdayResultMedium.search("5678"), -1, "plain monthday, dateStyle=medium: year should not appear");
assert.sameValue(monthdayResultMedium.search("3"), -1, "plain monthday, dateStyle=medium: numeric month should not appear");
assert.notSameValue(monthdayResultMedium.search("4"), -1, "plain monthday, dateStyle=medium: day should appear");

const monthdayResultLong = dateFormatterLong.format(monthday);
// assert.sameValue(monthdayResultLong, "March 4", "plain monthday, dateStyle=long");
assert.sameValue(monthdayResultLong.search("5678"), -1, "plain monthday, dateStyle=long: year should not appear");
assert.sameValue(monthdayResultLong.search("3"), -1, "plain monthday, dateStyle=long: numeric month should not appear");
assert.notSameValue(monthdayResultLong.search("4"), -1, "plain monthday, dateStyle=long: day should appear");

const monthdayResultFull = dateFormatterFull.format(monthday);
// assert.sameValue(monthdayResultFull, "March 4", "plain monthday, dateStyle=full");
assert.sameValue(monthdayResultFull.search("5678"), -1, "plain monthday, dateStyle=full: year should not appear");
assert.sameValue(monthdayResultFull.search("3"), -1, "plain monthday, dateStyle=full: numeric month should not appear");
assert.notSameValue(monthdayResultFull.search("4"), -1, "plain monthday, dateStyle=full: day should appear");

assert.throws(TypeError, () => timeFormatterShort.format(monthday), "plain monthday, timeStyle=short");
assert.throws(TypeError, () => timeFormatterMedium.format(monthday), "plain monthday, timeStyle=medium");
assert.throws(TypeError, () => timeFormatterLong.format(monthday), "plain monthday, timeStyle=long");
assert.throws(TypeError, () => timeFormatterFull.format(monthday), "plain monthday, timeStyle=full");

var monthdayResult = dateTimeFormatterShort.format(monthday);
assert.sameValue(monthdayResult, monthdayResultShort, "plain monthday, dateStyle = timeStyle = short: should match output with dateStyle only");

monthdayResult = dateTimeFormatterMedium.format(monthday);
assert.sameValue(monthdayResult, monthdayResultMedium, "plain monthday, dateStyle = timeStyle = medium: should match output with dateStyle only");

monthdayResult = dateTimeFormatterLong.format(monthday);
assert.sameValue(monthdayResult, monthdayResultLong, "plain monthday, dateStyle = timeStyle = long: should match output with dateStyle only");

monthdayResult = dateTimeFormatterFull.format(monthday);
assert.sameValue(monthdayResult, monthdayResultLong, "plain monthday, dateStyle = timeStyle = full: should match output with dateStyle only");

monthdayResult = dateTimeFormatterShortLong.format(monthday);
assert.sameValue(monthdayResult, monthdayResultShort, "plain monthday, dateStyle short, = timeStyle = long: should match output with dateStyle only");

// PlainYearMonth

// Use a reference day so we can check that it doesn't occur in any string output
const yearmonth = new Temporal.PlainYearMonth(2222, 1, "gregory", 30);

const yearmonthResultShort = dateFormatterShort.format(yearmonth);
// assert.sameValue(yearmonthResultShort, "1/22", "plain yearmonth, dateStyle=short");
assert.sameValue(yearmonthResultShort.search("30"), -1, "plain yearmonth, dateStyle=short: day should not appear");
assert.notSameValue(yearmonthResultShort.search("1"), -1, "plain yearmonth, dateStyle=short: numeric month should appear");
assert.notSameValue(yearmonthResultShort.search("22"), -1, "plain yearmonth, dateStyle=short: 2-digit year should appear");

const yearmonthResultMedium = dateFormatterMedium.format(yearmonth);
// assert.sameValue(yearmonthResultMedium, "Jan 2222", "plain yearmonth, dateStyle=medium");
assert.sameValue(yearmonthResultMedium.search("30"), -1, "plain yearmonth, dateStyle=medium: day should not appear");
assert.sameValue(yearmonthResultMedium.search("1"), -1, "plain yearmonth, dateStyle=medium: numeric month should not appear");
assert.notSameValue(yearmonthResultMedium.search("2222"), -1, "plain yearmonth, dateStyle=medium: 4-digit year should appear");

const yearmonthResultLong = dateFormatterLong.format(yearmonth);
// assert.sameValue(yearmonthResultLong, "January 2222", "plain yearmonth, dateStyle=long");
assert.sameValue(yearmonthResultLong.search("30"), -1, "plain yearmonth, dateStyle=long: day should not appear");
assert.sameValue(yearmonthResultLong.search("1"), -1, "plain yearmonth, dateStyle=long: numeric month should not appear");
assert.notSameValue(yearmonthResultLong.search("2222"), -1, "plain yearmonth, dateStyle=long: 4-digit year should appear");

const yearmonthResultFull = dateFormatterFull.format(yearmonth);
// assert.sameValue(yearmonthResultFull, "January 2222", "plain yearmonth, dateStyle=full");
assert.sameValue(yearmonthResultFull.search("30"), -1, "plain yearmonth, dateStyle=full: day should not appear");
assert.sameValue(yearmonthResultFull.search("1"), -1, "plain yearmonth, dateStyle=full: numeric month should not appear");
assert.notSameValue(yearmonthResultFull.search("2222"), -1, "plain yearmonth, dateStyle=full: 4-digit year should appear");

assert.throws(TypeError, () => timeFormatterShort.format(yearmonth), "plain yearmonth, timeStyle=short");
assert.throws(TypeError, () => timeFormatterMedium.format(yearmonth), "plain yearmonth, timeStyle=medium");
assert.throws(TypeError, () => timeFormatterLong.format(yearmonth), "plain yearmonth, timeStyle=long");
assert.throws(TypeError, () => timeFormatterFull.format(yearmonth), "plain yearmonth, timeStyle=full");

var yearmonthResult = dateTimeFormatterShort.format(yearmonth);
assert.sameValue(yearmonthResult, yearmonthResultShort, "plain yearmonth, dateStyle = timeStyle = short");
yearmonthResult = dateTimeFormatterMedium.format(yearmonth);
assert.sameValue(yearmonthResult, yearmonthResultMedium, "plain yearmonth, dateStyle = timeStyle = medium");
yearmonthResult = dateTimeFormatterLong.format(yearmonth);
assert.sameValue(yearmonthResult, yearmonthResultLong, "plain yearmonth, dateStyle = timeStyle = long");
yearmonthResult = dateTimeFormatterFull.format(yearmonth);
assert.sameValue(yearmonthResult, yearmonthResultFull, "plain yearmonth, dateStyle = timeStyle = full");
yearmonthResult = dateTimeFormatterShortLong.format(yearmonth);
assert.sameValue(yearmonthResult, yearmonthResultShort, "plain yearmonth, dateStyle = short, timeStyle = long");

// PlainTime

const time = new Temporal.PlainTime(0, 34, 56, 777, 888, 999);

assert.throws(TypeError, () => dateFormatterShort.format(time), "plain time, dateStyle=short");
assert.throws(TypeError, () => dateFormatterMedium.format(time), "plain time, dateStyle=medium");
assert.throws(TypeError, () => dateFormatterLong.format(time), "plain time, dateStyle=long");

const timeResultShort = timeFormatterShort.format(time);
// assert.sameValue(timeResultShort, "12:34 AM", "plain time, timeStyle=short");
assert.notSameValue(timeResultShort.search("12"), -1, "plainTime, timeStyle=short: hour should appear");
assert.sameValue(timeResultShort.search("56"), -1, "plainTime, timeStyle=short: seconds should not appear");

const timeResultMedium = timeFormatterMedium.format(time);
// assert.sameValue(timeResultMedium, "12:34:56 AM", "plain time, timeStyle=medium");
assert.notSameValue(timeResultMedium.search("56"), -1, "plainTime, timeStyle=medium: seconds should appear");
assert.sameValue(timeResultMedium.search("777"), -1, "plainTime, timeStyle=medium: milliseconds should not appear");

const timeResultLong = timeFormatterLong.format(time);
// assert.sameValue(timeResultLong, "12:34:56 AM", "plain time, timeStyle=long");
assert.notSameValue(timeResultMedium.search("34"), -1, "plainTime, timeStyle=long: minutes should appear");
assert.sameValue(timeResultMedium.search("888"), -1, "plainTime, timeStyle=long: microseconds should not appear");

var timeResult = dateTimeFormatterShort.format(time);
assert.sameValue(timeResult, timeResultShort, "plain time, dateStyle = timeStyle = short");

timeResult = dateTimeFormatterMedium.format(time);
assert.sameValue(timeResult, timeResultMedium, "plain time, dateStyle = timeStyle = medium");

timeResult = dateTimeFormatterLong.format(time);
assert.sameValue(timeResult, timeResultLong, "plain time, dateStyle = timeStyle = long");

timeResult = dateTimeFormatterFull.format(time);
assert.sameValue(timeResult, timeResultLong, "plain time, dateStyle = timeStyle = full");

timeResult = dateTimeFormatterShortLong.format(time);
assert.sameValue(timeResult, timeResultLong, "plain time, dateStyle = short, timeStyle = long");


