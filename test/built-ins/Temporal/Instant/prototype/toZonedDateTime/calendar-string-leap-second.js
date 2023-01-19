// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tozoneddatetime
description: Leap second is a valid ISO string for Calendar
features: [Temporal]
---*/

const instance = new Temporal.Instant(1_000_000_000_000_000_000n);

const arg = "2016-12-31T23:59:60";
const result = instance.toZonedDateTime({ calendar: arg, timeZone: "UTC" });
assert.sameValue(
  result.calendarId,
  "iso8601",
  "leap second is a valid ISO string for Calendar"
);
