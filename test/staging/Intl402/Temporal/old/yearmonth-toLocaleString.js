// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-intl
description: yearmonth.toLocaleString()
features: [Temporal]
---*/

var calendar = new Intl.DateTimeFormat("en-US").resolvedOptions().calendar;
var yearmonth = Temporal.PlainYearMonth.from({
  year: 1976,
  month: 11,
  calendar
});
assert.sameValue(`${yearmonth.toLocaleString("en-US", { timeZone: "America/New_York" })}`, "11/1976");
assert.sameValue(
  `${yearmonth.toLocaleString("de-AT", {
    timeZone: "Europe/Vienna",
    calendar
  })}`,
  "11.1976"
);

// should ignore units not in the data type
assert.sameValue(yearmonth.toLocaleString("en-US", { timeZoneName: "long" }), "11/1976");
assert.sameValue(yearmonth.toLocaleString("en-US", { day: "numeric" }), "11/1976");
assert.sameValue(yearmonth.toLocaleString("en-US", { hour: "numeric" }), "11/1976");
assert.sameValue(yearmonth.toLocaleString("en-US", { minute: "numeric" }), "11/1976");
assert.sameValue(yearmonth.toLocaleString("en-US", { second: "numeric" }), "11/1976");
assert.sameValue(yearmonth.toLocaleString("en-US", { weekday: "long" }), "11/1976");

// works when the object's calendar is the same as the locale's calendar
var ym = Temporal.PlainYearMonth.from({
  era: "showa",
  eraYear: 51,
  month: 11,
  calendar: "japanese"
});
var result = ym.toLocaleString("en-US-u-ca-japanese");
assert(result === "11/51" || result === "11/51 S");

// throws when the calendar is not equal to the locale calendar
var ymISO = Temporal.PlainYearMonth.from({
  year: 1976,
  month: 11
});
assert.throws(RangeError, () => ymISO.toLocaleString("en-US-u-ca-japanese"));
