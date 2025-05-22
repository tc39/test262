// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Different combinations of style options and Temporal.PlainDate format correctly.
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
