// Copyright 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-use-of-iana-time-zone-database
description: >
  ecma402#877 adds normative requirements for canonicalizing time zone names
  based on the rules laid down by CLDR and ICU in order to help improve the
  interoperability of implementations. This test verifies that the time zones
  are canonicalized correctly as per the specification.
---*/

const timeZones = [
  ["Europe/Prague", "Europe/Prague"],
  ["Europe/Bratislava", "Europe/Bratislava"],
  ["Atlantic/Jan_Mayen", "Arctic/Longyearbyen"],
];

for (const [timeZone, expected] of timeZones) {
  assert.sameValue(
    new Intl.DateTimeFormat([], { timeZone }).resolvedOptions().timeZone,
    expected,
    "Time zone name " + timeZone + " should be canonicalized to " + expected
  );
}
