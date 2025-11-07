// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: >
  If era option and no other options are provided to DateTimeFormat constructor,
  objects should be formatted with default options
features: [Temporal]
---*/

const formatter = new Intl.DateTimeFormat([], { era: "narrow" });

assert(formatter.formatRange(new Temporal.PlainDate(2025, 11, 4), new Temporal.PlainDate(2025, 11, 5)).startsWith("11"), "formatting a PlainDate should work");
assert(formatter.formatRange(new Temporal.PlainYearMonth(2025, 11, "gregory"), new Temporal.PlainYearMonth(2025, 12, "gregory")).startsWith("11"), "formatting a PlainYearMonth should work");
assert(formatter.formatRange(new Temporal.PlainMonthDay(11, 4, "gregory"), new Temporal.PlainMonthDay(11, 14, "gregory")).startsWith("11"), "formatting a PlainMonthDay should work");
assert(formatter.formatRange(new Temporal.PlainTime(14, 46), new Temporal.PlainTime(17, 46)).startsWith("2"), "formatting a PlainTime should work");
assert(formatter.formatRange(new Temporal.PlainDateTime(2025, 11, 4, 14, 46), new Temporal.PlainDateTime(2025, 11, 15, 14, 47)).startsWith("11"), "formatting a PlainDateTime should work");
assert(formatter.formatRange(new Temporal.Instant(0n), new Temporal.Instant(1000000000n)).startsWith("12"), "formatting an Instant should work");
