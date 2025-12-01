// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.monthcode
description: Indian calendar does not have leap months
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "indian";

for (var year = 1892; year < 1972; year++) {
  for (var month = 1; month < 13; month++) {
    const date = Temporal.ZonedDateTime.from({
        year,
        month,
        calendar, day: 1, hour: 12, minute: 34, timeZone: "UTC"
    });
    assert.sameValue(date.monthCode.endsWith("L"), false);
  }
}
