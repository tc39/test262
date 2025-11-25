// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: >
  Check various basic calculations not involving leap years or constraining
  (ethioaa calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "ethioaa";

// Years

const date72030216 = Temporal.ZonedDateTime.from({ year: 7203, monthCode: "M02", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72030330 = Temporal.ZonedDateTime.from({ year: 7203, monthCode: "M03", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72040329 = Temporal.ZonedDateTime.from({ year: 7204, monthCode: "M03", day: 29, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72110724 = Temporal.ZonedDateTime.from({ year: 7211, monthCode: "M07", day: 24, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72390516 = Temporal.ZonedDateTime.from({ year: 7239, monthCode: "M05", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72390616 = Temporal.ZonedDateTime.from({ year: 7239, monthCode: "M06", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72390617 = Temporal.ZonedDateTime.from({ year: 7239, monthCode: "M06", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72390622 = Temporal.ZonedDateTime.from({ year: 7239, monthCode: "M06", day: 22, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72390716 = Temporal.ZonedDateTime.from({ year: 7239, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72400616 = Temporal.ZonedDateTime.from({ year: 7240, monthCode: "M06", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72400716 = Temporal.ZonedDateTime.from({ year: 7240, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72401216 = Temporal.ZonedDateTime.from({ year: 7240, monthCode: "M12", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72401228 = Temporal.ZonedDateTime.from({ year: 7240, monthCode: "M12", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72401230 = Temporal.ZonedDateTime.from({ year: 7240, monthCode: "M12", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72401305 = Temporal.ZonedDateTime.from({ year: 7240, monthCode: "M13", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72620101 = Temporal.ZonedDateTime.from({ year: 7262, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72620201 = Temporal.ZonedDateTime.from({ year: 7262, monthCode: "M02", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72620724 = Temporal.ZonedDateTime.from({ year: 7262, monthCode: "M07", day: 24, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72621229 = Temporal.ZonedDateTime.from({ year: 7262, monthCode: "M12", day: 29, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72621230 = Temporal.ZonedDateTime.from({ year: 7262, monthCode: "M12", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72621305 = Temporal.ZonedDateTime.from({ year: 7262, monthCode: "M13", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72630201 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M02", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72630316 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M03", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72630330 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M03", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72631216 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M12", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72631229 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M12", day: 29, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72631230 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M12", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72631305 = Temporal.ZonedDateTime.from({ year: 7263, monthCode: "M13", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640105 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M01", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640107 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M01", day: 7, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640116 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M01", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640201 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640205 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640208 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 8, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640209 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 9, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640210 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 10, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640216 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640228 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M02", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar })
const date72640303 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M03", day: 3, hour: 12, minute: 34, timeZone: "UTC", calendar });;
const date72640305 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M03", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640306 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M03", day: 6, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640307 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M03", day: 7, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640329 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M03", day: 29, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640330 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M03", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640416 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M04", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640515 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M05", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640614 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M06", day: 14, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640615 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M06", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640616 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M06", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640621 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M06", day: 21, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640715 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M07", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640716 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640717 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M07", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640721 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M07", day: 21, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640723 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M07", day: 23, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640813 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M08", day: 13, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640816 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M08", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640817 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M08", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72640916 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M09", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72641228 = Temporal.ZonedDateTime.from({ year: 7264, monthCode: "M12", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72650228 = Temporal.ZonedDateTime.from({ year: 7265, monthCode: "M02", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72650716 = Temporal.ZonedDateTime.from({ year: 7265, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72650719 = Temporal.ZonedDateTime.from({ year: 7265, monthCode: "M07", day: 19, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72650919 = Temporal.ZonedDateTime.from({ year: 7265, monthCode: "M09", day: 19, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72660716 = Temporal.ZonedDateTime.from({ year: 7266, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72740716 = Temporal.ZonedDateTime.from({ year: 7274, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date72741216 = Temporal.ZonedDateTime.from({ year: 7274, monthCode: "M12", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });

const tests = [
  [
    date72640716, date72640716, "same day",
    ["years", 0, 0, 0, 0],
    ["months", 0, 0, 0, 0],
    ["weeks", 0, 0, 0, 0],
    ["days", 0, 0, 0, 0],
  ],
  [
    date72640716, date72640717, "one day",
    ["years", 0, 0, 0, -1],
    ["months", 0, 0, 0, -1],
    ["weeks", 0, 0, 0, -1],
    ["days", 0, 0, 0, -1],
  ],
  [
    date72640716, date72640723, "7 days",
    ["years", 0, 0, 0, -7],
    ["months", 0, 0, 0, -7],
    ["weeks", 0, 0, -1, 0],
  ],
  [
    date72640716, date72640816, "1 month in same year (30-day month to 29-day month)",
    ["years", 0, -1, 0, 0],
    ["months", 0, -1, 0, 0],
    ["weeks", 0, 0, -4, -2],
  ],
  [
    date72631305, date72640105, "1 month in different year",
    ["years", 0, -1, 0, 0],
    ["months", 0, -1, 0, 0],
  ],
  [
    date72640105, date72640205, "1 month in same year (29-day month to 30-day month)",
    ["years", 0, -1, 0, 0],
    ["months", 0, -1, 0, 0],
  ],
  [
    date72640205, date72640306, "1 month and 1 day in a month with 30 days",
    ["years", 0, -1, 0, -1],
    ["months", 0, -1, 0, -1],
    ["days", 0, 0, 0, -31],
  ],
  [
    date72640205, date72640303, "28 days across a month which has 30 days",
    ["years", 0, 0, 0, -28],
    ["months", 0, 0, 0, -28],
    ["weeks", 0, 0, -4, 0],
  ],
  [
    date72650716, date72660716, "1 year",
    ["years", -1, 0, 0, 0],
    ["months", 0, -13, 0, 0],
    ["weeks", 0, 0, -52, -1],
    ["days", 0, 0, 0, -365],
  ],
  [
    date72640716, date72740716, "10 years",
    ["years", -10, 0, 0, 0],
    ["months", 0, -130, 0, 0],
    ["weeks", 0, 0, -521, -5],
    ["days", 0, 0, 0, -3652],
  ],
  [
    date72640716, date72650719, "1 year and 3 days",
    ["years", -1, 0, 0, -3],
  ],
  [
    date72640716, date72650919, "1 year 2 months and 3 days",
    ["years", -1, -2, 0, -3],
  ],
  [
    date72640716, date72741216, "10 years and 5 months",
    ["years", -10, -5, 0, 0],
  ],
  [
    date72401216, date72640616, "23 years and 7 months",
    ["years", -23, -7, 0, 0],
  ],
  [
    date72400716, date72640716, "24 years",
    ["years", -24, 0, 0, 0],
  ],
  [
    date72400716, date72640614, "23 years, 11 months and 28 days",
    ["years", -23, -11, 0, -28],
  ],
  [
    date72400716, date72640615, "23 years, 11 months and 29 days",
    ["years", -23, -11, 0, -29],
  ],
  [
    date72030216, date72630316, "60 years, 1 month",
    ["years", -60, -1, 0, 0],
  ],
  [
    date72640330, date72640716, "3 months and 16 days",
    ["years", 0, -3, 0, -16],
  ],
  [
    date72630330, date72640716, "1 year, 3 months and 16 days",
    ["years", -1, -3, 0, -16],
  ],
  [
    date72030330, date72640716, "61 years, 3 months and 16 days",
    ["years", -61, -3, 0, -16],
  ],
  [
    date72621230, date72640716, "1 year, 7 months and 16 days",
    ["years", -1, -7, 0, -16],
  ],
  [
    date72631305, date72640621, "6 months and 16 days",
    ["years", 0, -6, 0, -16],
  ],
  [
    date72401305, date72640621, "23 years, 6 months and 16 days",
    ["years", -23, -6, 0, -16],
  ],
  [
    date72621305, date72640210, "1 year, 2 months and 5 days",
    ["years", -1, -2, 0, -5],
  ],
  [
    date72640717, date72640716, "negative one day",
    ["years", 0, 0, 0, 1],
    ["months", 0, 0, 0, 1],
    ["weeks", 0, 0, 0, 1],
    ["days", 0, 0, 0, 1],
  ],
  [
    date72640723, date72640716, "negative 7 days",
    ["years", 0, 0, 0, 7],
    ["months", 0, 0, 0, 7],
    ["weeks", 0, 0, 1, 0],
  ],
  [
    date72640816, date72640716, "negative 1 month in same year",
    ["years", 0, 1, 0, 0],
    ["months", 0, 1, 0, 0],
    ["weeks", 0, 0, 4, 2],
  ],
  [
    date72640105, date72631305, "negative 1 month in different year",
    ["years", 0, 1, 0, 0],
    ["months", 0, 1, 0, 0],
  ],
  [
    date72640205, date72640105, "negative 1 month in same year",
    ["years", 0, 1, 0, 0],
    ["months", 0, 1, 0, 0],
  ],
  [
    date72640329, date72640228, "negative 1 month and 1 day in a month with 30 days",
    ["years", 0, 1, 0, 1],
    ["months", 0, 1, 0, 1],
    ["days", 0, 0, 0, 31],
  ],
  [
    date72640307, date72640209, "negative 28 days across a month which has 30 days",
    ["years", 0, 0, 0, 28],
    ["months", 0, 0, 0, 28],
    ["weeks", 0, 0, 4, 0],
  ],
  [
    date72640416, date72640216, "negative 2 months which both have 30 days",
    ["years", 0, 2, 0, 0],
    ["months", 0, 2, 0, 0],
    ["weeks", 0, 0, 8, 4],
    ["days", 0, 0, 0, 60],
  ],
  [
    date72660716, date72650716, "negative 1 year",
    ["years", 1, 0, 0, 0],
    ["months", 0, 13, 0, 0],
    ["weeks", 0, 0, 52, 1],
    ["days", 0, 0, 0, 365],
  ],
  [
    date72740716, date72640716, "negative 10 years",
    ["years", 10, 0, 0, 0],
    ["months", 0, 130, 0, 0],
    ["weeks", 0, 0, 521, 5],
    ["days", 0, 0, 0, 3652],
  ],
  [
    date72650719, date72640716, "negative 1 year and 3 days",
    ["years", 1, 0, 0, 3],
  ],
  [
    date72650919, date72640716, "negative 1 year 2 months and 3 days",
    ["years", 1, 2, 0, 3],
  ],
  [
    date72741216, date72640716, "negative 10 years and 5 months",
    ["years", 10, 5, 0, 0],
  ],
  [
    date72640716, date72401216, "negative 23 years and 8 months",
    ["years", 23, 8, 0, 0],
  ],
  [
    date72640716, date72400716, "negative 24 years",
    ["years", 24, 0, 0, 0],
  ],
  [
    date72640615, date72390617, "negative 24 years, 12 months and 28 days",
    ["years", 24, 12, 0, 28],
  ],
  [
    date72640515, date72390516, "negative 24 years, 12 months and 29 days",
    ["years", 24, 12, 0, 29],
  ],
  [
    date72630316, date72030216, "negative 60 years, 1 month",
    ["years", 60, 1, 0, 0],
  ],
  [
    date72640716, date72640329, "negative 3 months and 17 days",
    ["years", 0, 3, 0, 17],
  ],
  [
    date72650716, date72640329, "negative 1 year, 3 months and 17 days",
    ["years", 1, 3, 0, 17],
  ],
  [
    date72650716, date72040329, "negative 61 years, 3 months and 17 days",
    ["years", 61, 3, 0, 17],
  ],
  [
    date72660716, date72641228, "negative 1 year, 7 months and 7 days",
    ["years", 1, 7, 0, 7],
  ],
  [
    date72640716, date72631230, "negative 7 months and 6 days",
    ["years", 0, 7, 0, 6],
  ],
  [
    date72640716, date72401228, "negative 23 years, 7 months and 7 days",
    ["years", 23, 7, 0, 7],
  ],
  [
    date72640305, date72621229, "negative 1 year, 3 months and 6 days",
    ["years", 1, 3, 0, 6],
  ]
];

for (const [one, two, descr, ...units] of tests) {
  for (const [largestUnit, years, months, weeks, days] of units) {
    TemporalHelpers.assertDuration(
      one.since(two, { largestUnit }),
      years, months, weeks, days, 0, 0, 0, 0, 0, 0,
      `${descr} (largestUnit = ${largestUnit})`
    );
  }
}
