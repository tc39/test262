// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.zoneddatetime
description: Negative zero, as an extended year, is rejected
features: [Temporal, arrow-function]
---*/

const invalidStrings = [
  "-000000-10-31T17:45Z",
  "-000000-10-31T17:45+00:00[UTC]",
];
invalidStrings.forEach((timeZone) => {
  assert.throws(
    RangeError,
    () => Temporal.Now.zonedDateTime("iso8601", timeZone),
    "reject minus zero as extended year"
  );
});
