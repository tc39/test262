// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Maximum allowed duration
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC");

const maxCases = [
  ["P100000000D", "string with max days"],
  [{ days: 100000000 }, "property bag with max days"],
  ["PT2400000000H", "string with max hours"],
  [{ hours: 2400000000 }, "property bag with max hours"],
  ["PT144000000000M", "string with max minutes"],
  [{ minutes: 144000000000 }, "property bag with max minutes"],
  ["PT8640000000000S", "string with max seconds"],
  [{ seconds: 8640000000000 }, "property bag with max seconds"],
];

for (const [arg, descr] of maxCases) {
  const result = instance.add(arg);
  assert.sameValue(result.epochNanoseconds, 8640000000000000000000n, `operation succeeds with ${descr}`);
}

const minCases = [
  ["-P100000000D", "string with min days"],
  [{ days: -100000000 }, "property bag with min days"],
  ["-PT2400000000H", "string with min hours"],
  [{ hours: -2400000000 }, "property bag with min hours"],
  ["-PT144000000000M", "string with min minutes"],
  [{ minutes: -144000000000 }, "property bag with min minutes"],
  ["-PT8640000000000S", "string with min seconds"],
  [{ seconds: -8640000000000 }, "property bag with min seconds"],
];

for (const [arg, descr] of minCases) {
  const result = instance.add(arg);
  assert.sameValue(result.epochNanoseconds, -8640000000000000000000n, `operation succeeds with ${descr}`);
}
