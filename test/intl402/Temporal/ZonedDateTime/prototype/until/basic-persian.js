// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: >
  Check various basic calculations not involving leap years or constraining
  (Persian calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "persian";

// Years

const date13010216 = Temporal.ZonedDateTime.from({ year: 1301, monthCode: "M02", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13020216 = Temporal.ZonedDateTime.from({ year: 1302, monthCode: "M02", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13030216 = Temporal.ZonedDateTime.from({ year: 1303, monthCode: "M02", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13030330 = Temporal.ZonedDateTime.from({ year: 1303, monthCode: "M03", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13120724 = Temporal.ZonedDateTime.from({ year: 1312, monthCode: "M07", day: 24, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13381202 = Temporal.ZonedDateTime.from({ year: 1338, monthCode: "M12", day: 2, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400504 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M05", day: 4, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400614 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M06", day: 14, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400615 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M06", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400616 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M06", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400617 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M06", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400618 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M06", day: 18, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13400716 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13401202 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M12", day: 2, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13401216 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M12", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar })
const date13401228 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M12", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13401230 = Temporal.ZonedDateTime.from({ year: 1340, monthCode: "M12", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar })
const date13410104 = Temporal.ZonedDateTime.from({ year: 1341, monthCode: "M01", day: 4, hour: 12, minute: 34, timeZone: "UTC", calendar });;
const date13410504 = Temporal.ZonedDateTime.from({ year: 1341, monthCode: "M05", day: 4, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13620101 = Temporal.ZonedDateTime.from({ year: 1362, monthCode: "M01", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13620201 = Temporal.ZonedDateTime.from({ year: 1362, monthCode: "M02", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13620316 = Temporal.ZonedDateTime.from({ year: 1362, monthCode: "M03", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13620724 = Temporal.ZonedDateTime.from({ year: 1362, monthCode: "M07", day: 24, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13621229 = Temporal.ZonedDateTime.from({ year: 1362, monthCode: "M12", day: 29, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13621230 = Temporal.ZonedDateTime.from({ year: 1362, monthCode: "M12", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13630201 = Temporal.ZonedDateTime.from({ year: 1363, monthCode: "M02", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13630316 = Temporal.ZonedDateTime.from({ year: 1363, monthCode: "M03", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13630330 = Temporal.ZonedDateTime.from({ year: 1363, monthCode: "M03", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13631216 = Temporal.ZonedDateTime.from({ year: 1363, monthCode: "M12", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13631228 = Temporal.ZonedDateTime.from({ year: 1363, monthCode: "M12", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13631230 = Temporal.ZonedDateTime.from({ year: 1363, monthCode: "M12", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640105 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M01", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640107 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M01", day: 7, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640116 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M01", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640201 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M02", day: 1, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640205 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M02", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640216 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M02", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640228 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M02", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar })
const date13640304 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M03", day: 4, hour: 12, minute: 34, timeZone: "UTC", calendar });;
const date13640305 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M03", day: 5, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640307 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M03", day: 7, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640316 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M03", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640330 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M03", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640416 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M04", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640513 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M05", day: 13, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640515 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M05", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640516 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M05", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640517 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M05", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640613 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M06", day: 13, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640614 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M06", day: 14, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640615 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M06", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640616 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M06", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640617 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M06", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640713 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M07", day: 13, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640714 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M07", day: 14, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640715 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M07", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640716 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640717 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M07", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640723 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M07", day: 23, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640813 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M08", day: 13, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640814 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M08", day: 14, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640815 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M08", day: 15, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640816 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M08", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640817 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M08", day: 17, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13640916 = Temporal.ZonedDateTime.from({ year: 1364, monthCode: "M09", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13650228 = Temporal.ZonedDateTime.from({ year: 1365, monthCode: "M02", day: 28, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13650716 = Temporal.ZonedDateTime.from({ year: 1365, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13650719 = Temporal.ZonedDateTime.from({ year: 1365, monthCode: "M07", day: 19, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13650919 = Temporal.ZonedDateTime.from({ year: 1365, monthCode: "M09", day: 19, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13740716 = Temporal.ZonedDateTime.from({ year: 1374, monthCode: "M07", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });
const date13741216 = Temporal.ZonedDateTime.from({ year: 1374, monthCode: "M12", day: 16, hour: 12, minute: 34, timeZone: "UTC", calendar });

const tests = [
  [
    date13640716, date13640716, "same day",
    ["years", 0, 0, 0, 0],
    ["months", 0, 0, 0, 0],
    ["weeks", 0, 0, 0, 0],
    ["days", 0, 0, 0, 0],
  ],
  [
    date13640716, date13640717, "one day",
    ["years", 0, 0, 0, 1],
    ["months", 0, 0, 0, 1],
    ["weeks", 0, 0, 0, 1],
    ["days", 0, 0, 0, 1],
  ],
  [
    date13640716, date13640723, "7 days",
    ["years", 0, 0, 0, 7],
    ["months", 0, 0, 0, 7],
    ["weeks", 0, 0, 1, 0],
  ],
  [
    date13640716, date13640816, "1 month in same year",
    ["years", 0, 1, 0, 0],
    ["months", 0, 1, 0, 0],
    ["weeks", 0, 0, 4, 2],
  ],
  [
    date13631216, date13640116, "1 month in different year",
    ["years", 0, 1, 0, 0],
    ["months", 0, 1, 0, 0],
  ],
  [
    date13640105, date13640205, "1 month in same year",
    ["years", 0, 1, 0, 0],
    ["months", 0, 1, 0, 0],
  ],
  [
    date13640716, date13640817, "1 month and 1 day in a month with 30 days",
    ["years", 0, 1, 0, 1],
    ["months", 0, 1, 0, 1],
    ["days", 0, 0, 0, 31],
  ],
  [
    date13640516, date13640617, "1 month and 1 day in a month with 31 days",
    ["years", 0, 1, 0, 1],
    ["months", 0, 1, 0, 1],
    ["days", 0, 0, 0, 32],
  ],
  [
    date13640716, date13640814, "28 days across a month which has 30 days",
    ["years", 0, 0, 0, 28],
    ["months", 0, 0, 0, 28],
    ["weeks", 0, 0, 4, 0],
  ],
  [
    date13640716, date13640916, "2 months which both have 30 days",
    ["years", 0, 2, 0, 0],
    ["months", 0, 2, 0, 0],
    ["weeks", 0, 0, 8, 4],
    ["days", 0, 0, 0, 60],
  ],
  [
    date13640416, date13640616, "2 months which both have 31 days",
    ["years", 0, 2, 0, 0],
    ["months", 0, 2, 0, 0],
    ["weeks", 0, 0, 8, 6],
    ["days", 0, 0, 0, 62],
  ],
  [
    date13640716, date13650716, "1 year",
    ["years", 1, 0, 0, 0],
    ["months", 0, 12, 0, 0],
    ["weeks", 0, 0, 52, 1],
    ["days", 0, 0, 0, 365],
  ],
  [
    date13630201, date13640201, "start of Ordibehesht",
    ["years", 1, 0, 0, 0],
    ["months", 0, 12, 0, 0],
  ],
  [
    date13640228, date13650228, "end of Ordibehesht",
    ["years", 1, 0, 0, 0],
    ["months", 0, 12, 0, 0],
  ],
  [
    date13620101, date13620201, "length of Farvardin 1362",
    ["days", 0, 0, 0, 31],
  ],
  [
    date13640716, date13740716, "10 years",
    ["years", 10, 0, 0, 0],
    ["months", 0, 120, 0, 0],
    ["weeks", 0, 0, 521, 5],
    ["days", 0, 0, 0, 3652],
  ],
  [
    date13640716, date13650719, "1 year and 3 days",
    ["years", 1, 0, 0, 3],
  ],
  [
    date13640716, date13650919, "1 year 2 months and 3 days",
    ["years", 1, 2, 0, 3],
  ],
  [
    date13640716, date13741216, "10 years and 5 months",
    ["years", 10, 5, 0, 0],
  ],
  [
    date13401216, date13640716, "23 years and 7 months",
    ["years", 23, 7, 0, 0],
  ],
  [
    date13400716, date13640716, "24 years",
    ["years", 24, 0, 0, 0],
  ],
  [
    date13400716, date13640713, "23 years, 11 months and 28 days",
    ["years", 23, 11, 0, 28],
  ],
  [
    date13400616, date13640614, "23 years, 11 months and 29 days",
    ["years", 23, 11, 0, 29],
  ],
  [
    date13030216, date13630316, "60 years, 1 month",
    ["years", 60, 1, 0, 0],
  ],
  [
    date13640330, date13640716, "3 months and 17 days",
    ["years", 0, 3, 0, 17],
  ],
  [
    date13630330, date13640716, "1 year, 3 months and 17 days",
    ["years", 1, 3, 0, 17],
  ],
  [
    date13030330, date13640716, "61 years, 3 months and 17 days",
    ["years", 61, 3, 0, 17],
  ],
  [
    date13621230, date13640716, "1 year, 6 months and 17 days",
    ["years", 1, 6, 0, 17],
  ],
  [
    date13631230, date13640715, "6 months and 17 days",
    ["years", 0, 6, 0, 17],
  ],
  [
    date13401230, date13640715, "23 years, 6 months and 17 days",
    ["years", 23, 6, 0, 17],
  ],
  [
    date13621230, date13640304, "1 year, 2 months and 5 days",
    ["years", 1, 2, 0, 5],
  ],
  [
    date13640717, date13640716, "negative one day",
    ["years", 0, 0, 0, -1],
    ["months", 0, 0, 0, -1],
    ["weeks", 0, 0, 0, -1],
    ["days", 0, 0, 0, -1],
  ],
  [
    date13640723, date13640716, "negative 7 days",
    ["years", 0, 0, 0, -7],
    ["months", 0, 0, 0, -7],
    ["weeks", 0, 0, -1, 0],
  ],
  [
    date13640816, date13640716, "negative 1 month in same year (1)",
    ["years", 0, -1, 0, 0],
    ["months", 0, -1, 0, 0],
    ["weeks", 0, 0, -4, -2],
  ],
  [
    date13640116, date13631216, "negative 1 month in different year",
    ["years", 0, -1, 0, 0],
    ["months", 0, -1, 0, 0],
  ],
  [
    date13640205, date13640105, "negative 1 month in same year (2)",
    ["years", 0, -1, 0, 0],
    ["months", 0, -1, 0, 0],
  ],
  [
    date13640817, date13640716, "negative 1 month and 1 day in a month with 30 days",
    ["years", 0, -1, 0, -1],
    ["months", 0, -1, 0, -1],
    ["days", 0, 0, 0, -31],
  ],
  [
    date13640815, date13640717, "negative 28 days across a month which has 30 days",
    ["years", 0, 0, 0, -28],
    ["months", 0, 0, 0, -28],
    ["weeks", 0, 0, -4, 0],
  ],
  [
    date13640916, date13640716, "negative 2 months which both have 30 days",
    ["years", 0, -2, 0, 0],
    ["months", 0, -2, 0, 0],
    ["weeks", 0, 0, -8, -4],
    ["days", 0, 0, 0, -60],
  ],
  [
    date13650716, date13640716, "negative 1 year",
    ["years", -1, 0, 0, 0],
    ["months", 0, -12, 0, 0],
    ["weeks", 0, 0, -52, -1],
    ["days", 0, 0, 0, -365],
  ],
  [
    date13740716, date13640716, "negative 10 years",
    ["years", -10, 0, 0, 0],
    ["months", 0, -120, 0, 0],
    ["weeks", 0, 0, -521, -5],
    ["days", 0, 0, 0, -3652],
  ],
  [
    date13650719, date13640716, "negative 1 year and 3 days",
    ["years", -1, 0, 0, -3],
  ],
  [
    date13650919, date13640716, "negative 1 year 2 months and 3 days",
    ["years", -1, -2, 0, -3],
  ],
  [
    date13741216, date13640716, "negative 10 years and 5 months",
    ["years", -10, -5, 0, 0],
  ],
  [
    date13640716, date13401216, "negative 23 years and 7 months",
    ["years", -23, -7, 0, 0],
  ],
  [
    date13640716, date13400716, "negative 24 years",
    ["years", -24, 0, 0, 0],
  ],
  [
    date13640615, date13400617, "negative 23 years, 11 months and 29 days",
    ["years", -23, -11, 0, -29],
  ],
  [
    date13640615, date13400616, "negative 23 years, 11 months and 30 days",
    ["years", -23, -11, 0, -30],
  ],
  [
    date13620316, date13020216, "negative 60 years, 1 month",
    ["years", -60, -1, 0, 0],
  ],
  [
    date13640716, date13640330, "negative 3 months and 17 days",
    ["years", 0, -3, 0, -17],
  ],
  [
    date13640716, date13630330, "negative 1 year, 3 months and 17 days",
    ["years", -1, -3, 0, -17],
  ],
  [
    date13640716, date13030330, "negative 61 years, 3 months and 17 days",
    ["years", -61, -3, 0, -17],
  ],
  [
    date13640716, date13621229, "negative 1 year, 6 months and 17 days",
    ["years", -1, -6, 0, -17],
  ],
  [
    date13640716, date13631228, "negative 6 months and 17 days",
    ["years", 0, -6, 0, -17],
  ],
  [
    date13640716, date13401228, "negative 23 years, 6 months and 17 days",
    ["years", -23, -6, 0, -17],
  ],
  [
    date13640305, date13621230, "negative 1 year, 2 months and 5 days",
    ["years", -1, -2, 0, -5],
  ]
];

for (const [one, two, descr, ...units] of tests) {
  for (const [largestUnit, years, months, weeks, days] of units) {
    TemporalHelpers.assertDuration(
      one.until(two, { largestUnit }),
      years, months, weeks, days, 0, 0, 0, 0, 0, 0,
      descr
    );
  }
}
