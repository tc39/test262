// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.withplaintime
description: ISO 8601 time designator "T" required in cases of ambiguity
features: [Temporal, arrow-function]
---*/

const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");

const ambiguousStrings = [
  "2021-12",  // ambiguity between YYYY-MM and HHMM-UU
  "1214",     // ambiguity between MMDD and HHMM
  "0229",     //   ditto, including MMDD that doesn't occur every year
  "1130",     //   ditto, including DD that doesn't occur in every month
  "12-14",    // ambiguity between MM-DD and HH-UU
  "202112",   // ambiguity between YYYYMM and HHMMSS
];
ambiguousStrings.forEach((stringWithoutCalendar) => {
  // calendar annotation must not cause disambiguation in favour of time
  const stringWithCalendar = stringWithoutCalendar + '[u-ca=iso8601]';
  [stringWithoutCalendar, stringWithCalendar].forEach((string) => {
    let arg = string;
    assert.throws(
      RangeError,
      () => instance.withPlainTime(arg),
      `${string} is ambiguous and requires T prefix`
    );
    // The same string with a T prefix should not throw:
    arg = `T${string}`;
    instance.withPlainTime(arg);

    arg = ` ${string}`;
    assert.throws(
      RangeError,
      () => instance.withPlainTime(arg),
      "space is not accepted as a substitute for T prefix"
    );
  });
});

// None of these should throw without a T prefix, because they are unambiguously time strings:
const unambiguousStrings = [
  "2021-13",          // 13 is not a month
  "202113",           //   ditto
  "2021-13[-13:00]",  //   ditto
  "202113[-13:00]",   //   ditto
  "0000-00",          // 0 is not a month
  "000000",           //   ditto
  "0000-00[UTC]",     //   ditto
  "000000[UTC]",      //   ditto
  "1314",             // 13 is not a month
  "13-14",            //   ditto
  "1232",             // 32 is not a day
  "0230",             // 30 is not a day in February
  "0631",             // 31 is not a day in June
  "0000",             // 0 is neither a month nor a day
  "00-00",            //   ditto
  "2021-12[-12:00]",  // HHMM-UU is ambiguous with YYYY-MM, but TZ disambiguates
  "202112[UTC]",      // HHMMSS is ambiguous with YYYYMM, but TZ disambiguates
];
unambiguousStrings.forEach((arg) => instance.withPlainTime(arg));
