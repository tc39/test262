// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.from
description: Various string arguments.
features: [Temporal]
---*/

const tests = [
  ['1976-11-18T15:23:30.123456789Z[Europe/Paris]', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789Z[NotATimeZone]', 217178610123456789n],
];

for (const [arg, expected] of tests) {
  const result = Temporal.Instant.from(arg);
  assert.sameValue(result.epochNanoseconds, expected, `Instant.from(${arg})`);
}
