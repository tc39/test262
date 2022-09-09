// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.until
description: Tests calculations with roundingMode "halfCeil".
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const earlier = new Temporal.Instant(217178610_123_456_789n);
const later = new Temporal.Instant(1572345998_271_986_102n);

const expected = [
  ["hours", [0, 0, 0, 0, 376435], [0, 0, 0, 0, -376435]],
  ["minutes", [0, 0, 0, 0, 376435, 23], [0, 0, 0, 0, -376435, -23]],
  ["seconds", [0, 0, 0, 0, 376435, 23, 8], [0, 0, 0, 0, -376435, -23, -8]],
  ["milliseconds", [0, 0, 0, 0, 376435, 23, 8, 149], [0, 0, 0, 0, -376435, -23, -8, -149]],
  ["microseconds", [0, 0, 0, 0, 376435, 23, 8, 148, 529], [0, 0, 0, 0, -376435, -23, -8, -148, -529]],
  ["nanoseconds", [0, 0, 0, 0, 376435, 23, 8, 148, 529, 313], [0, 0, 0, 0, -376435, -23, -8, -148, -529, -313]],
];

const roundingMode = "halfCeil";
const largestUnit = "hours";

expected.forEach(([smallestUnit, expectedPositive, expectedNegative]) => {
  const [py, pm = 0, pw = 0, pd = 0, ph = 0, pmin = 0, ps = 0, pms = 0, pµs = 0, pns = 0] = expectedPositive;
  const [ny, nm = 0, nw = 0, nd = 0, nh = 0, nmin = 0, ns = 0, nms = 0, nµs = 0, nns = 0] = expectedNegative;
  TemporalHelpers.assertDuration(
    earlier.until(later, { largestUnit, smallestUnit, roundingMode }),
    py, pm, pw, pd, ph, pmin, ps, pms, pµs, pns,
    `rounds to ${smallestUnit} (roundingMode = ${roundingMode}, positive case)`
  );
  TemporalHelpers.assertDuration(
    later.until(earlier, { largestUnit, smallestUnit, roundingMode }),
    ny, nm, nw, nd, nh, nmin, ns, nms, nµs, nns,
    `rounds to ${smallestUnit} (rounding mode = ${roundingMode}, negative case)`
  );
});
