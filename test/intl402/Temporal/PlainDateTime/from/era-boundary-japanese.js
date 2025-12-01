// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.from
description: >
  Dates in same year before era starts should resolve to previous era
  (Japanese calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "japanese";

const reiwa = Temporal.PlainDateTime.from({ era: "reiwa", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34,  calendar });
const heisei = Temporal.PlainDateTime.from({ era: "heisei", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34,  calendar });
const showa = Temporal.PlainDateTime.from({ era: "showa", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34,  calendar });
const taisho = Temporal.PlainDateTime.from({ era: "taisho", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34,  calendar });
const meiji = Temporal.PlainDateTime.from({ era: "meiji", eraYear: 1, month: 1, day: 1, hour: 12, minute: 34,  calendar });

TemporalHelpers.assertPlainDateTime(reiwa, 2019, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Reiwa resolves to Heisei", "heisei", 31);

TemporalHelpers.assertPlainDateTime(heisei, 1989, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Heisei resolves to Showa", "showa", 64);

TemporalHelpers.assertPlainDateTime(showa, 1926, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Showa resolves to Taisho", "taisho", 15);

TemporalHelpers.assertPlainDateTime(taisho, 1912, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Taisho resolves to Meiji", "meiji", 45);

TemporalHelpers.assertPlainDateTime(meiji, 1868, 1, "M01", 1, 12, 34, 0, 0, 0, 0,  "Meiji resolves to CE", "ce", 1868);
