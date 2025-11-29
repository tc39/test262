// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.monthcode
description: Coptic calendar does not have leap months
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "coptic";

for (var year = 1686; year < 1691; year++) {
  for (var month = 1; month < 14; month++) {
    const date = Temporal.PlainYearMonth.from({
        year,
        month,
        calendar
    });
    assert.sameValue(date.monthCode.endsWith("L"), false);
  }
}
