// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.daysinyear
description: >
  Calling the method on an instance constructed with a builtin calendar causes
  no observable lookups or calls to calendar methods.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const daysInYearOriginal = Object.getOwnPropertyDescriptor(Temporal.Calendar.prototype, "daysInYear");
Object.defineProperty(Temporal.Calendar.prototype, "daysInYear", {
  configurable: true,
  enumerable: false,
  get() {
    TemporalHelpers.assertUnreachable("daysInYear should not be looked up");
  },
});

const instance = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321, "iso8601");
instance.daysInYear;

Object.defineProperty(Temporal.Calendar.prototype, "daysInYear", daysInYearOriginal);
