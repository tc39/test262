// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.from
description: >
  Japanese calendar dates before the Meiji era use "ce" or "bce" eras.
info: |
  The Japanese calendar in Temporal only supports the five modern eras (meiji,
  taisho, showa, heisei, reiwa) plus "ce" and "bce" for dates outside those
  ranges. Dates before Meiji 6 (1873) are represented using the "ce" era.
features: [Temporal]
---*/

// A date before the Meiji era (which starts at 1873 in the polyfill).
// 1800-06-15 in ISO calendar should be in the "ce" era in the Japanese calendar.
var preMeiji = Temporal.PlainDate.from({ calendar: "japanese", era: "ce", eraYear: 1800, month: 6, day: 15 });
assert.sameValue(preMeiji.era, "ce", "pre-Meiji date should be in ce era");
assert.sameValue(preMeiji.eraYear, 1800, "pre-Meiji date eraYear should be 1800");
assert.sameValue(preMeiji.year, 1800, "pre-Meiji date year should be 1800");
assert.sameValue(preMeiji.month, 6, "pre-Meiji date month");
assert.sameValue(preMeiji.day, 15, "pre-Meiji date day");

// Also verify round-tripping through ISO
var isoDate = preMeiji.withCalendar("iso8601");
assert.sameValue(isoDate.year, 1800, "round-tripped ISO year");
assert.sameValue(isoDate.month, 6, "round-tripped ISO month");
assert.sameValue(isoDate.day, 15, "round-tripped ISO day");

// A date in early Meiji, but before the cutoff at Meiji 6 (1873)
// 1870-03-01 should still be in "ce" era
var earlyMeiji = Temporal.PlainDate.from({ calendar: "japanese", era: "ce", eraYear: 1870, month: 3, day: 1 });
assert.sameValue(earlyMeiji.era, "ce", "early pre-Meiji date should be in ce era");
assert.sameValue(earlyMeiji.eraYear, 1870, "early pre-Meiji date eraYear should be 1870");

// A BCE date in the Japanese calendar
var bceDate = Temporal.PlainDate.from({ calendar: "japanese", era: "bce", eraYear: 100, month: 1, day: 1 });
assert.sameValue(bceDate.era, "bce", "BCE date should be in bce era");
assert.sameValue(bceDate.eraYear, 100, "BCE date eraYear");
assert.sameValue(bceDate.year, -99, "BCE date year should be -99 (since 1 BCE = year 0 = year 0)");

// Converting an ISO date to Japanese calendar should also trigger the era
// revision for pre-Meiji dates. This exercises the isoToCalendarDate path.
var isoPreMeiji = new Temporal.PlainDate(1800, 6, 15);
var japanesePreMeiji = isoPreMeiji.withCalendar("japanese");
assert.sameValue(japanesePreMeiji.era, "ce", "ISO date converted to Japanese should be in ce era");
assert.sameValue(japanesePreMeiji.eraYear, 1800, "ISO date converted to Japanese eraYear should be 1800");
assert.sameValue(japanesePreMeiji.year, 1800, "ISO date converted to Japanese year");

// Also test a BCE date via ISO-to-Japanese conversion
var isoBce = new Temporal.PlainDate(-99, 1, 1);
var japaneseBce = isoBce.withCalendar("japanese");
assert.sameValue(japaneseBce.era, "bce", "ISO BCE date converted to Japanese should be in bce era");
assert.sameValue(japaneseBce.eraYear, 100, "ISO BCE date converted to Japanese eraYear should be 100");
