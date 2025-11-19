// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Tests balancing of days to months at end of month (indian calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "indian";

// Difference between end of longer month to end of following shorter month
{
  const end = Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M07", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
  for (const largestUnit of ["years", "months"]) {
    TemporalHelpers.assertDuration(
      Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit }),
      0, -1, 0, 0, 0, 0, 0, 0, 0, 0,
      `Bhadra 30th to Asvina 30th is one month (${largestUnit})`
    );
    TemporalHelpers.assertDuration(
      Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit }),
      0, 0, 0, -30, 0, 0, 0, 0, 0, 0,
      `Bhadra 31st to Asvina 30th is 30 days, not one month (${largestUnit})`
    );
  }
}

// Difference between end of leap-year Chaitra (M01) to end of leap-year Vaisakha (M02)
{
  const start = Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M01", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar });
  for (const largestUnit of ["years", "months"]) {
    TemporalHelpers.assertDuration(
      start.since(
        Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M02", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar }), { largestUnit }),
      0, -1, 0, 0, 0, 0, 0, 0, 0, 0,
      `Chaitra 31st to Vaisakha 31st is one month (${largestUnit})`
    );
    TemporalHelpers.assertDuration(
      start.since(
        Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M02", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }), { largestUnit }),
      0, 0, 0, -30, 0, 0, 0, 0, 0, 0,
      `Chaitra 31st to Vaisakha 30th is 30 days, not one month (${largestUnit})`
    );
    TemporalHelpers.assertDuration(
      start.since(
        Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M02", day: 29, hour: 12, minute: 34, timeZone: "UTC", calendar }), { largestUnit }),
      0, 0, 0, -29, 0, 0, 0, 0, 0, 0,
      `Chaitra 31st to Vaisakha 31st is 29 days, not one month (${largestUnit})`
    );
  }
}

// Difference between end of longer month to end of not-immediately-following
// shorter month
{
  const end = Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M08", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
  for (const largestUnit of ["years", "months"]) {
    TemporalHelpers.assertDuration(
      Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit }),
      0, -2, 0, 0, 0, 0, 0, 0, 0, 0,
      `Bhadra 30th to Kartika 30th is 2 months (${largestUnit})`
    );
    TemporalHelpers.assertDuration(
      Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit }),
      0, -1, 0, -30, 0, 0, 0, 0, 0, 0,
      `Bhadra 31st to Kartika 30th is 1 month 30 days, not 2 months (${largestUnit})`
    );
  }
}

// Difference between end of longer month in one year to shorter month in
// later year
{
  const end = Temporal.ZonedDateTime.from({ year: 1973, monthCode: "M07", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar });
  TemporalHelpers.assertDuration(
    Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit: "months" }),
    0, -37, 0, 0, 0, 0, 0, 0, 0, 0,
    "Bhadra 30th 1970 to Asvina 30th 1973 is 37 months"
  );
  TemporalHelpers.assertDuration(
    Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit: "years" }),
    -3, -1, 0, 0, 0, 0, 0, 0, 0, 0,
    "Bhadra 30th 1970 to Asvina 30th 1973 is 3 years, 1 month"
  );
  TemporalHelpers.assertDuration(
    Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit: "months" }),
    0, -36, 0, -30, 0, 0, 0, 0, 0, 0,
    "Bhadra 31st 1970 to Asvina 30th 1973 is 36 months, 30 days, not 37 months"
  );
  TemporalHelpers.assertDuration(
    Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar }).since(end, { largestUnit: "years" }),
    -3, 0, 0, -30, 0, 0, 0, 0, 0, 0,
    "Bhadra 31st 1970 to Asvina 30th 1973 is 3 years, 30 days"
  );
}

// Difference where months passes through a month that's the same length or
// shorter than either the start or end month
{
  TemporalHelpers.assertDuration(
    Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar })
      .since(Temporal.ZonedDateTime.from({ year: 1971, monthCode: "M01", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }), { largestUnit: "months" }),
    0, -6, 0, -30, 0, 0, 0, 0, 0, 0,
    "Bhadra 31st 1970 to Chaitra 30th 1971 is 6 months 30 days, not 210 days"
  );
  TemporalHelpers.assertDuration(
    Temporal.ZonedDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, timeZone: "UTC", calendar })
      .since(Temporal.ZonedDateTime.from({ year: 1972, monthCode: "M01", day: 30, hour: 12, minute: 34, timeZone: "UTC", calendar }), { largestUnit: "years" }),
    -1, -6, 0, -30, 0, 0, 0, 0, 0, 0,
    "Bhadra 31st 1970 to Chaitra 30th 1972 is 1 year, 6 months, 30 days"
  );
}
