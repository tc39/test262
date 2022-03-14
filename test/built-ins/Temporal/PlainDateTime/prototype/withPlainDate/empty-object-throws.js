// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.withplaindate
description: Empty object not acceptable
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);

assert.throws(
  TypeError,
  () => dt.withPlainDate({}),
  'empty object not acceptable'
);
