// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.with
description: gregory calendar does not have leap months
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "gregory";
const options = { overflow: "reject" };

for (var year = 1970; year < 1975; year++) {
  for (var month = 1; month < 13; month++) {
    const date = Temporal.PlainDate.from({
      year,
      month: 1,
      day: 1,
      calendar
    });
  assert.throws(RangeError, () => date.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }));
  assert.throws(RangeError, () => date.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }, options));
  }
}
