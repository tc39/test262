// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.prototype.calendarid
description: >
  Calling the method on an instance constructed with a builtin calendar causes
  no observable lookups or calls to calendar methods.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const idOriginal = Object.getOwnPropertyDescriptor(Temporal.Calendar.prototype, "id");
Object.defineProperty(Temporal.Calendar.prototype, "id", {
  configurable: true,
  enumerable: false,
  get() {
    TemporalHelpers.assertUnreachable("id should not be looked up");
  },
});

const instance = new Temporal.PlainMonthDay(5, 2, "iso8601", 1972);
instance.calendarId;

Object.defineProperty(Temporal.Calendar.prototype, "id", idOriginal);
