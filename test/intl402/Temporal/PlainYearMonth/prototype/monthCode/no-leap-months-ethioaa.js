// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.monthcode
description: ethioaa calendar does not have leap months
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "ethioaa";

for (var year = 7462; year < 7467; year++) {
  for (var month = 1; month < 14; month++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month,
        calendar
    });
    assert.sameValue(date.monthCode.endsWith("L"), false);
  }
}
