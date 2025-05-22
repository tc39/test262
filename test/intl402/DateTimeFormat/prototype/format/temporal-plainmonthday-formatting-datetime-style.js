// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal.PlainMonthDay format correctly.
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
