// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.total
description: Totals with a ZonedDateTime relativeTo at the limits
features: [Temporal]
---*/

const max = new Temporal.ZonedDateTime(86400_0000_0000_000_000_000n, "+23:59");
const min = new Temporal.ZonedDateTime(-86400_0000_0000_000_000_000n, "-23:59");

for (const [label, relativeTo, sign] of [
  ["maximum", max, -1],
  ["minimum", min, 1]
]) {
  const duration = new Temporal.Duration(0, 0, 0, 0, sign);

  assert.sameValue(
    duration.total({ unit: "hour", relativeTo }),
    sign,
    `one hour in hours relative to the ${label}`
  );
  assert.sameValue(
    duration.total({ unit: "day", relativeTo }),
    sign / 24,
    `one hour in days relative to the ${label}`
  );
}

assert.throws(
  RangeError,
  () => new Temporal.Duration(0, 0, 0, 0, 1).total({ unit: "hour", relativeTo: max }),
  "a positive duration relative to the maximum is out of range"
);
assert.throws(
  RangeError,
  () => new Temporal.Duration(0, 0, 0, 0, -1).total({ unit: "hour", relativeTo: min }),
  "a negative duration relative to the minimum is out of range"
);
