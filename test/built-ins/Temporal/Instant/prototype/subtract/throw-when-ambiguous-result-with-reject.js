// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.subtract
description: Symmetrical with regard to negative durations in the time part.
features: [Temporal]
---*/

const mar31 = Temporal.ZonedDateTime.from("2020-03-31T15:00+00:00[UTC]");

// throw when ambiguous result with reject
assert.throws(RangeError, () => mar31.subtract({ months: 1 }, { overflow: "reject" }));
