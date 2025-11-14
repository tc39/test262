// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.from
description: Ensures that `"iso8601"` only calendar with non-`undefined` `weekOfYear`
features: [Temporal, Intl.Era-monthcode]
---*/

const nonIsoCalendars = [
  "buddhist",
  "chinese",
  "coptic",
  "dangi",
  "ethioaa",
  "ethiopic",
  "ethiopic-amete-alem",
  "gregory",
  "hebrew",
  "indian",
  "islamic-civil",
  "islamic-tbla",
  "islamic-umalqura",
  "islamicc",
  "japanese",
  "persian",
  "roc"
];

for (const calendar of nonIsoCalendars){
  const plainDate = Temporal.PlainDateTime.from({
    calendar,
    year: 1,
    month: 1,
    day: 1
  });
  assert.sameValue(calendar.weekOfYear === undefined, true, "weekOfYear for " + calendar.calendarId + " should be undefined");
}

const isoCalendar = Temporal.PlainDateTime.from({
  calendar: "iso8601",
  year: 1,
  month: 1,
  day: 1,
});

assert.sameValue(isoCalendar.weekOfYear !== undefined, true, "weekOfYear should not be undefined for 'iso8601' calendar");
