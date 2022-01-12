// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.plaindatetime
description: Conversion of ISO date-time strings to Temporal.TimeZone instances
features: [Temporal]
---*/

let timeZone = "2021-08-19T17:30";
assert.throws(RangeError, () => Temporal.Now.plainDateTime("iso8601", timeZone), "bare date-time string is not a time zone");
assert.throws(RangeError, () => Temporal.Now.plainDateTime("iso8601", { timeZone }), "bare date-time string is not a time zone");

// The following are all valid strings so should not throw:

[
  "2021-08-19T17:30Z",
  "2021-08-19T17:30-07:00",
  "2021-08-19T17:30[UTC]",
  "2021-08-19T17:30Z[UTC]",
  "2021-08-19T17:30-07:00[UTC]",
].forEach((timeZone) => {
  Temporal.Now.plainDateTime("iso8601", timeZone);
  Temporal.Now.plainDateTime("iso8601", { timeZone });
});
