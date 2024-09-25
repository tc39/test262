// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.from
description: Various string arguments.
features: [Temporal]
---*/

const tests = [
  ['1976-11-18T15:23z', 217178580000000000n],
  ['1976-11-18T15:23:30.1Z', 217178610100000000n],
  ['1976-11-18T15:23:30.12Z', 217178610120000000n],
  ['1976-11-18T15:23:30.123Z', 217178610123000000n],
  ['1976-11-18T15:23:30.1234Z', 217178610123400000n],
  ['1976-11-18T15:23:30.12345Z', 217178610123450000n],
  ['1976-11-18T15:23:30.123456Z', 217178610123456000n],
  ['1976-11-18T15:23:30.1234567Z', 217178610123456700n],
  ['1976-11-18T15:23:30.12345678Z', 217178610123456780n],
  ['1976-11-18T15:23:30.123456789Z', 217178610123456789n],
  ['1976-11-18T15:23:30,12Z', 217178610120000000n],
  ['1976-11-18T15:23:30.12-02:00', 217185810120000000n],
  ['-009999-11-18T15:23:30.12Z', -377677326989880000000n],
  ['19761118T15:23:30.1+00:00', 217178610100000000n],
  ['1976-11-18T152330.1+00:00', 217178610100000000n],
  ['1976-11-18T15:23:30.1+0000', 217178610100000000n],
  ['1976-11-18T152330.1+0000', 217178610100000000n],
  ['19761118T15:23:30.1+0000', 217178610100000000n],
  ['19761118T152330.1+00:00', 217178610100000000n],
  ['+0019761118T15:23:30.1+00:00', 217178610100000000n],
  ['+001976-11-18T152330.1+00:00', 217178610100000000n],
  ['+001976-11-18T15:23:30.1+0000', 217178610100000000n],
  ['+001976-11-18T152330.1+0000', 217178610100000000n],
  ['+0019761118T15:23:30.1+0000', 217178610100000000n],
  ['+0019761118T152330.1+00:00', 217178610100000000n],
  ['+0019761118T152330.1+0000', 217178610100000000n],
  ['1976-11-18T15:23:30+00', 217178610000000000n],
  ['1976-11-18T15:23:30.123456789-00:00:00', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.0', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.00', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.0000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.00000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.0000000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.00000000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000000000', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.1', 217178610223456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.01', 217178610133456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.001', 217178610124456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.0001', 217178610123556789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.00001', 217178610123466789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000001', 217178610123457789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.0000001', 217178610123456889n],
  ['1976-11-18T15:23:30.123456789-00:00:00.00000001', 217178610123456799n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000000001', 217178610123456790n],
  ['1976-11-18T15:23:30.123456789-00:00:00.100000000', 217178610223456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.010000000', 217178610133456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.001000000', 217178610124456789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000100000', 217178610123556789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000010000', 217178610123466789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000001000', 217178610123457789n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000000100', 217178610123456889n],
  ['1976-11-18T15:23:30.123456789-00:00:00.000000010', 217178610123456799n],
  ['1976-11-18T15Z', 217177200000000000n],
  ['1976-11-18T15:23:30.123456789Z[u-ca=discord]', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789Z[+00]', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789Z[-00]', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789Z[-00:00]', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789Z[+12]', 217178610123456789n],
  ['1976-11-18T15:23:30.123456789Z[NotATimeZone]', 217178610123456789n],
];

for (const [arg, expected] of tests) {
  const result = Temporal.Instant.from(arg);
  assert.sameValue(result.epochNanoseconds, expected, `Instant.from(${arg})`);
}
