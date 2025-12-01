// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.monthcode
description: Buddhist calendar does not have leap months
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "buddhist";

for (var year = 2513; year < 2518; year++) {
  for (var month = 1; month < 13; month++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month,
        calendar
    });
    assert.sameValue(date.monthCode.endsWith("L"), false);
  }
}
