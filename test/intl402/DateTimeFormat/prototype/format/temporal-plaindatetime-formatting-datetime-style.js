// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal.PlainDateTime format correctly.
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
assert.notSameValue(datetimeResult.search("Monday"), -1, "plain datetime, dateStyle=full: day of week should appear");
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
assert.notSameValue(datetimeResult.search("Monday"), -1, "plain datetime, dateStyle = timeStyle = full: day of week should appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = timeStyle = full: day should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = timeStyle = full: milliseconds should not appear");

datetimeResult = dateTimeFormatterShortLong.format(datetime);
// assert.sameValue(datetimeResult, "3/4/22, 5:06:07 AM", "plain datetime, dateStyle = short, timeStyle = long");
assert.sameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = short, timeStyle = long: 4-digit year should not appear");
assert.notSameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = short, timeStyle = long: numeric month should appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = short, timeStyle = long: day should appear");
assert.sameValue(datetimeResult.search("888"), -1, "plain datetime, dateStyle = short, timeStyle = long: milliseconds should not appear");


datetimeResult = dateTimeFormatterShortMedium.format(datetime);
// assert.sameValue(datetimeResult, "3/4/22, 5:06:07 AM", "plain datetime, dateStyle = short, timeStyle = medium");
assert.sameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = short, timeStyle = medium: 4-digit year should not appear");
assert.notSameValue(datetimeResult.search("3"), -1, "plain datetime, dateStyle = short, timeStyle = medium: numeric month should appear");
assert.notSameValue(datetimeResult.search("4"), -1, "plain datetime, dateStyle = short, timeStyle = medium: day should appear");
assert.sameValue(datetimeResult.search("111"), -1, "plain datetime, dateStyle = short, timeStyle = medium: nanoseconds should not appear");

datetimeResult = dateTimeFormatterShortFull.format(datetime);
// assert.sameValue(datetimeResult, "3/4/22, 5:06:07 AM", "plain datetime, dateStyle = short, timeStyle = full");
assert.sameValue(datetimeResult.search("2222"), -1, "plain datetime, dateStyle = short, timeStyle = full: 4-digit year should not appear");
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
