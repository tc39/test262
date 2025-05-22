// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal.PlainTime format correctly.
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


