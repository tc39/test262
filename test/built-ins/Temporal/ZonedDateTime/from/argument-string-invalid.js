// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: >
  Check that UTC offsets are parsed properly
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

assert.throws(RangeError,
  () => Temporal.ZonedDateTime.from("2025-01-01T00:00:00+00:0000[UTC]"),
  "UTCOffset must be of the form hh:mm:ss or hhmmss");
