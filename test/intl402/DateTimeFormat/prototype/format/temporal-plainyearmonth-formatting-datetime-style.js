// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal.PlainYearMonth format correctly.
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
