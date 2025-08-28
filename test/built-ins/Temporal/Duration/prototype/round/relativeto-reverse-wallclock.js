// Copyright (C) 2025 Adam Shaw. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Ensures the round method does not error when delta from a relativeTo ZonedDateTime
  results in a wallclock delta direction that is different from the duration's sign
includes: [temporalHelpers.js]
features: [Temporal]
---*/

/*
Related to https://github.com/tc39/proposal-temporal/issues/3141
*/

TemporalHelpers.assertDuration(
  Temporal.Duration.from({ minutes: -59 }).round({
    smallestUnit: 'hours',
    relativeTo: '2025-11-02T01:00:00-08:00[America/Vancouver]',
  }),
  0, 0, 0, 0, /* hours = */ -1, 0, 0, 0, 0, 0,
  'negative delta from relativeTo, positive wallclock delta',
);

TemporalHelpers.assertDuration(
  Temporal.Duration.from({ minutes: 59 }).round({
    smallestUnit: 'hours',
    relativeTo: '2025-11-02T01:01:00-07:00[America/Vancouver]',
  }),
  0, 0, 0, 0, /* hours = */ 1, 0, 0, 0, 0, 0,
  'positive delta from relativeTo, negative wallclock delta',
);
