// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.total
description: >
    Builtin dateFromFields method is not observably called when the property bag
    has a string-valued calendar property
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const dateFromFieldsOriginal = Object.getOwnPropertyDescriptor(Temporal.Calendar.prototype, "dateFromFields");
Object.defineProperty(Temporal.Calendar.prototype, "dateFromFields", {
  configurable: true,
  enumerable: false,
  get() {
    TemporalHelpers.assertUnreachable("dateFromFields should not be looked up");
  },
});

const instance = new Temporal.Duration(1, 0, 0, 0, 24);
const relativeTo = { year: 2000, month: 5, day: 2, calendar: "iso8601" };
instance.total({ unit: "days", relativeTo });

Object.defineProperty(Temporal.Calendar.prototype, "dateFromFields", dateFromFieldsOriginal);
