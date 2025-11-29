// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.from
description: >
  Dates in same year before era starts should resolve to previous era
  (Japanese calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "japanese";

const reiwa = Temporal.ZonedDateTime.from({ era: "reiwa", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34, timeZone: "UTC",  calendar });
const heisei = Temporal.ZonedDateTime.from({ era: "heisei", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34, timeZone: "UTC",  calendar });
const showa = Temporal.ZonedDateTime.from({ era: "showa", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34, timeZone: "UTC",  calendar });
const taisho = Temporal.ZonedDateTime.from({ era: "taisho", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34, timeZone: "UTC",  calendar });
const meiji = Temporal.ZonedDateTime.from({ era: "meiji", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34, timeZone: "UTC",  calendar });

TemporalHelpers.assertPlainDateTime(reiwa.toPlainDateTime(), 2019, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Reiwa resolves to Heisei", "heisei", 31);

TemporalHelpers.assertPlainDateTime(heisei.toPlainDateTime(), 1989, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Heisei resolves to Showa", "showa", 64);

TemporalHelpers.assertPlainDateTime(showa.toPlainDateTime(), 1926, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Showa resolves to Taisho", "taisho", 15);

TemporalHelpers.assertPlainDateTime(taisho.toPlainDateTime(), 1912, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Taisho resolves to Meiji", "meiji", 45);

TemporalHelpers.assertPlainDateTime(meiji.toPlainDateTime(), 1868, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Meiji resolves to CE", "ce", 1868);
