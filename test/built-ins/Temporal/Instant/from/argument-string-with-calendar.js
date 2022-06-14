// Copyright (C) 2022 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.from
description: Various string arguments with a calendar component.
features: [Temporal]
---*/

const tests = [
  '1976-11-18T15:23:30.123456789Z[u-ca=discord]',
  '1976-11-18T15:23:30.123456789Z[UTC][u-ca=discord]',
];

for (const arg of tests) {
  assert.throws(RangeError, () => Temporal.Instant.from(arg));
}
