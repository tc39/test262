// Copyright (C) 2025 Adam Shaw. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Ensures the total method does not error when delta from a relativeTo ZonedDateTime
  results in a wallclock delta direction that is different from the duration's sign
includes: [temporalHelpers.js]
features: [Temporal]
---*/

/*
Related to https://github.com/tc39/proposal-temporal/issues/3141
*/

assert.sameValue(
  Temporal.Duration.from({ minutes: -59 }).total({
    unit: 'hours',
    relativeTo: '2025-11-02T01:00:00-08:00[America/Vancouver]',
  }),
  -59 / 60,
  'negative delta from relativeTo, positive wallclock delta',
);

assert.sameValue(
  Temporal.Duration.from({ minutes: 59 }).total({
    unit: 'hours',
    relativeTo: '2025-11-02T01:01:00-07:00[America/Vancouver]',
  }),
  59 / 60,
  'positive delta from relativeTo, negative wallclock delta',
);
