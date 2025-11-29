// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.from
description: >
  Dates in same year before era starts should resolve to previous era
  (Japanese calendar)
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "japanese";

const reiwa = Temporal.PlainDate.from({ era: "reiwa", eraYear: 1, month: 1, day: 1,  calendar });
const heisei = Temporal.PlainDate.from({ era: "heisei", eraYear: 1, month: 1, day: 1,  calendar });
const showa = Temporal.PlainDate.from({ era: "showa", eraYear: 1, month: 1, day: 1,  calendar });
const taisho = Temporal.PlainDate.from({ era: "taisho", eraYear: 1, month: 1, day: 1,  calendar });
const meiji = Temporal.PlainDate.from({ era: "meiji", eraYear: 1, month: 1, day: 1,  calendar });

TemporalHelpers.assertPlainDate(reiwa, 2019, 1, "M01", 1,  "Reiwa resolves to Heisei", "heisei", 31);

TemporalHelpers.assertPlainDate(heisei, 1989, 1, "M01", 1,  "Heisei resolves to Showa", "showa", 64);

TemporalHelpers.assertPlainDate(showa, 1926, 1, "M01", 1,  "Showa resolves to Taisho", "taisho", 15);

TemporalHelpers.assertPlainDate(taisho, 1912, 1, "M01", 1,  "Taisho resolves to Meiji", "meiji", 45);

TemporalHelpers.assertPlainDate(meiji, 1868, 1, "M01", 1,  "Meiji resolves to CE", "ce", 1868);
