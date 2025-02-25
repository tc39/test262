// Copyright 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.zoneddatetime.prototype.equals
description: >
  Tests that the time zone names "Etc/UTC", "Etc/GMT", and "GMT" are equal to,
  but not canonicalized to, "UTC".
info: |
  Temporal.ZonedDateTime.prototype.equals ( other )

  ...
  5. If TimeZoneEquals(zonedDateTime.[[TimeZone]], other.[[TimeZone]]) is false,
     return false.

  TimeZoneEquals ( one, two )

  ...
  4.a. Let recordOne be GetAvailableNamedTimeZoneIdentifier(one).
    b. Let recordTwo be GetAvailableNamedTimeZoneIdentifier(two).
    c. If recordOne is not empty and recordTwo is not empty and
       recordOne.[[PrimaryIdentifier]] is recordTwo.[[PrimaryIdentifier]],
       return true.

features: [canonical-tz, Temporal]
---*/

const utcIdentifiers = ["Etc/GMT", "Etc/UTC", "GMT"];

for (const timeZone of utcIdentifiers) {
  const dateTime = new Temporal.ZonedDateTime(0n, timeZone);
  const utcDateTime = new Temporal.ZonedDateTime(0n, "UTC");
  assert.notSameValue(dateTime.timeZoneId, utcDateTime.timeZoneId, `${timeZone} should not be canonicalized to UTC`);
  assert(dateTime.equals(utcDateTime), `Time zone ${timeZone} should be equal to primary identifier UTC`);
}
