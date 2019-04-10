// Copyright 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date-time-style-pattern
description: Checks basic handling of timeStyle and dateStyle.
features: [Intl.DateTimeFormat-datetimestyle]
locale: [en-US]
---*/

const date = new Date("1886-05-01T14:12:47Z");
const dateOptions = [
  ["full", "Saturday, May 1, 1886", " at "],
  ["long", "May 1, 1886", " at "],
  ["medium", "May 1, 1886", ", "],
  ["short", "5/1/86", ", "],
];

const timeOptions = [
  ["full", "2:12:47 PM Coordinated Universal Time", "14:12:47 Coordinated Universal Time"],
  ["long", "2:12:47 PM UTC", "14:12:47 UTC"],
  ["medium", "2:12:47 PM", "14:12:47"],
  ["short", "2:12 PM", "14:12"],
];

const options12 = [
  { "hour12": true },
  { "hourCycle": "h11" },
  { "hourCycle": "h12" },
  { "hourCycle": "h23", "hour12": true },
  { "hourCycle": "h24", "hour12": true },
];

const options24 = [
  { "hour12": false },
  { "hourCycle": "h23" },
  { "hourCycle": "h24" },
  { "hourCycle": "h11", "hour12": false },
  { "hourCycle": "h12", "hour12": false },
];

for (const [dateStyle, expected] of dateOptions) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    dateStyle,
    timeZone: "UTC",
  });

  const dateString = dtf.format(date);
  assert.sameValue(dateString, expected, `Result for ${dateStyle}`);
}

for (const [timeStyle, expected12, expected24] of timeOptions) {
  for (const hourOptions of options12) {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeStyle,
      timeZone: "UTC",
      ...hourOptions
    });

    const dateString = dtf.format(date);
    assert.sameValue(dateString, expected12, `Result for ${timeStyle} with ${JSON.stringify(hourOptions)}`);
  }

  for (const hourOptions of options24) {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeStyle,
      timeZone: "UTC",
      ...hourOptions
    });

    const dateString = dtf.format(date);
    assert.sameValue(dateString, expected24, `Result for ${timeStyle} with ${JSON.stringify(hourOptions)}`);
  }
}

for (const [dateStyle, expectedDate, connector] of dateOptions) {
  for (const [timeStyle, expectedTime] of timeOptions) {
    const dtf = new Intl.DateTimeFormat("en-US", {
      dateStyle,
      timeStyle,
      timeZone: "UTC",
    });

    const dateString = dtf.format(date);
    assert.sameValue(
      dateString,
      [expectedDate, connector, expectedTime].join(""),
      `Result for date=${dateStyle} and time=${timeStyle}`
    );
  }
}
