// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.equals
description: Different time zones not equal.
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC", "iso8601");
assert(instance.equals("1970-01-01T00:00+00:00[UTC][u-ca=iso8601]"));
assert(instance.equals({
  year: 1970,
  month: 1,
  day: 1,
  timeZone: "UTC",
  calendar: "iso8601",
}));

