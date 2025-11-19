// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.until
description: Tests balancing of days to months at end of month (Persian calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "persian";

// Difference between end of longer month to end of following shorter month
{
  const end = Temporal.PlainDateTime.from({ year: 1970, monthCode: "M07", day: 30, hour: 12, minute: 34, calendar });
  for (const largestUnit of ["years", "months"]) {
    TemporalHelpers.assertDuration(
      Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, calendar }).until(end, { largestUnit }),
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      `Shahrivar 30th to Mehr 30th is one month (${largestUnit})`
    );
    TemporalHelpers.assertDuration(
      Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, calendar }).until(end, { largestUnit }),
      0, 0, 0, 30, 0, 0, 0, 0, 0, 0,
      `Shahrivar 31st to Mehr 30th is 30 days, not one month (${largestUnit})`
    );
  }
}

// Difference between end of leap-year Bahman to end of leap-year Esfand
{
  const end = Temporal.PlainDateTime.from({ year: 1973, monthCode: "M12", day: 30, hour: 12, minute: 34, calendar });
  for (const largestUnit of ["years", "months"]) {
    TemporalHelpers.assertDuration(
      Temporal.PlainDateTime.from({ year: 1973, monthCode: "M11", day: 30, hour: 12, minute: 34, calendar }).until(end, { largestUnit }),
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      `Bahman 30th to Esfand 30th is one month (${largestUnit})`
    );
  }
}

// Difference between end of longer month to end of not-immediately-following
// shorter month
{
  const end = Temporal.PlainDateTime.from({ year: 1970, monthCode: "M08", day: 30, hour: 12, minute: 34, calendar });
  for (const largestUnit of ["years", "months"]) {
    TemporalHelpers.assertDuration(
      Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, calendar }).until(end, { largestUnit }),
      0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
      `Shahrivar 30th to Aban 30th is 2 months (${largestUnit})`
    );
    TemporalHelpers.assertDuration(
      Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, calendar }).until(end, { largestUnit }),
      0, 1, 0, 30, 0, 0, 0, 0, 0, 0,
      `Shahrivar 30th to Aban 29th is 1 month 30 days, not 2 months (${largestUnit})`
    );
  }
}

// Difference between end of longer month in one year to shorter month in
// later year
{
  const end = Temporal.PlainDateTime.from({ year: 1971, monthCode: "M12", day: 29, hour: 12, minute: 34, calendar });
  TemporalHelpers.assertDuration(
    Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 29, hour: 12, minute: 34, calendar }).until(end, { largestUnit: "months" }),
    0, 18, 0, 0, 0, 0, 0, 0, 0, 0,
    "Shahrivar 29th 1970 to Esfand 29th 1971 is 18 months"
  );
  TemporalHelpers.assertDuration(
    Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 29, hour: 12, minute: 34, calendar }).until(end, { largestUnit: "years" }),
    1, 6, 0, 0, 0, 0, 0, 0, 0, 0,
    "Shahrivar 29th 1970 to Esfand 29th 1971 is 1 year, 6 months"
  );
  TemporalHelpers.assertDuration(
    Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, calendar }).until(end, { largestUnit: "months" }),
    0, 17, 0, 29, 0, 0, 0, 0, 0, 0,
    "Shahrivar 30th 1970 to Esfand 29th 1971 is 17 months, 29 days, not 18 months"
  );
  TemporalHelpers.assertDuration(
    Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 30, hour: 12, minute: 34, calendar }).until(end, { largestUnit: "years" }),
    1, 5, 0, 29, 0, 0, 0, 0, 0, 0,
    "Shahrivar 30th 1970 to Esfand 29th 1971 is 1 year, 5 months, 29 days, not 1 year 6 months"
  );
}

// Difference where months passes through a month that's the same length or
// shorter than either the start or end month
{
  TemporalHelpers.assertDuration(
    Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, calendar })
      .until(Temporal.PlainDateTime.from({ year: 1971, monthCode: "M01", day: 30, hour: 12, minute: 34, calendar }), { largestUnit: "months" }),
    0, 6, 0, 30, 0, 0, 0, 0, 0, 0,
    "Shahrivar 31st 1970 to Farvardin 30th 1971 is 6 months 30 days, not 209 days"
  );
  TemporalHelpers.assertDuration(
    Temporal.PlainDateTime.from({ year: 1970, monthCode: "M06", day: 31, hour: 12, minute: 34, calendar })
      .until(Temporal.PlainDateTime.from({ year: 1972, monthCode: "M01", day: 30, hour: 12, minute: 34, calendar }), { largestUnit: "years" }),
    1, 6, 0, 30, 0, 0, 0, 0, 0, 0,
    "Shahrivar 31st 1970 to Farvardin 30th 1972 is 1 year, 6 months, 30 days"
  );
}
