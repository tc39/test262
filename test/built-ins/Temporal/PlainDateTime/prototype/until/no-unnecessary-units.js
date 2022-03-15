// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.until
description: Do not return Durations with unnecessary units
features: [Temporal]
---*/

const lastFeb20 = PlainDateTime.from('2020-02-29T00:00');
const lastFeb21 = PlainDateTime.from('2021-02-28T00:00');

TemporalHelpers.assertDuration(
  lastFeb20.until(lastFeb21),
  0, 365, 0, 0, 0, 0, 0, 0, 0, 0,
  'does not include higher units than necessary (no largest unit)'
);

TemporalHelpers.assertDuration(
  lastFeb20.until(lastFeb21, { largestUnit: 'months' }),
  0, 12, 0, 0, 0, 0, 0, 0, 0, 0,
  'does not include higher units than necessary (largest unit = months)'
);

TemporalHelpers.assertDuration(
  lastFeb20.until(lastFeb21, { largestUnit: 'years' }),
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  'does not include higher units than necessary (largest unit = years)'
);
