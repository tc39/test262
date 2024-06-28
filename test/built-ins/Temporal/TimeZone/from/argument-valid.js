// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.from
description: Built-in time zones are parsed correctly out of valid strings
features: [Temporal]
---*/

const valids = [
  ["+01:00"],
  ["-01:00"],
  ["+0330", "+03:30"],
  ["-0650", "-06:50"],
  ["-08", "-08:00"],
  ["UTC"],
  ["1994-11-05T08:15:30-05:00", "-05:00"],
  ["1994-11-05T13:15:30Z", "UTC"],
];

for (const [valid, canonical = valid] of valids) {
  const result = Temporal.TimeZone.from(valid);
  assert.sameValue(Object.getPrototypeOf(result), Temporal.TimeZone.prototype);
  assert.sameValue(result.id, canonical);
  assert.sameValue(result.toString(), canonical);
}
