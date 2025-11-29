// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.from
description: >
  Dates in same year before era starts should resolve to previous era
  (Japanese calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "japanese";

const reiwa = Temporal.PlainYearMonth.from({ era: "reiwa", eraYear: 1, month: 1,  calendar });
const heisei = Temporal.PlainYearMonth.from({ era: "heisei", eraYear: 1, month: 1,  calendar });
const showa = Temporal.PlainYearMonth.from({ era: "showa", eraYear: 1, month: 1,  calendar });
const taisho = Temporal.PlainYearMonth.from({ era: "taisho", eraYear: 1, month: 1,  calendar });
const meiji = Temporal.PlainYearMonth.from({ era: "meiji", eraYear: 1, month: 1,  calendar });

TemporalHelpers.assertPlainYearMonth(reiwa, 2019, 1, "M01",  "Reiwa resolves to Heisei", "heisei", 31);

TemporalHelpers.assertPlainYearMonth(heisei, 1989, 1, "M01",  "Heisei resolves to Showa", "showa", 64);

TemporalHelpers.assertPlainYearMonth(showa, 1926, 1, "M01",  "Showa resolves to Taisho", "taisho", 15);

TemporalHelpers.assertPlainYearMonth(taisho, 1912, 1, "M01",  "Taisho resolves to Meiji", "meiji", 45);

TemporalHelpers.assertPlainYearMonth(meiji, 1868, 1, "M01",  "Meiji resolves to CE", "ce", 1868);
