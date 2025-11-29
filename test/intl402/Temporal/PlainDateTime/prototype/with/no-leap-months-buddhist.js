// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.with
description: Buddhist calendar does not have leap months
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "buddhist";
const options = { overflow: "reject" };

for (var year = 2513; year < 2518; year++) {
  for (var month = 1; month < 13; month++) {
    const date = Temporal.PlainDateTime.from({
      year,
      month: 1,
      day: 1,
      calendar, hour: 12, minute: 34
    });
  assert.throws(RangeError, () => date.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }));
  assert.throws(RangeError, () => date.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }, options));
  }
}
