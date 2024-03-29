// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.year
description: >
  Calling the method on an instance constructed with a builtin calendar causes
  no observable lookups or calls to calendar methods.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const yearOriginal = Object.getOwnPropertyDescriptor(Temporal.Calendar.prototype, "year");
Object.defineProperty(Temporal.Calendar.prototype, "year", {
  configurable: true,
  enumerable: false,
  get() {
    TemporalHelpers.assertUnreachable("year should not be looked up");
  },
});

const instance = new Temporal.PlainYearMonth(2000, 5, "iso8601", 1);
instance.year;

Object.defineProperty(Temporal.Calendar.prototype, "year", yearOriginal);
