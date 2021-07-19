// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.mergefields
description: Temporal.Calendar.prototype.mergeFields will throw TypeError with incorrect input.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Set fields to ? ToObject(fields).
  5. Set additionalFields to ? ToObject(additionalFields).
  6. Return ? DefaultMergeFields(fields, additionalFields).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

// Test throwing
assert.throws(TypeError, () => cal.mergeFields(),
    "Cannot convert undefined or null to object");
assert.throws(TypeError, () => cal.mergeFields(undefined, {}),
    "Cannot convert undefined or null to object");
assert.throws(TypeError, () => cal.mergeFields(null, {}),
    "Cannot convert undefined or null to object");
assert.throws(TypeError, () => cal.mergeFields({}, undefined),
    "Cannot convert undefined or null to object");
assert.throws(TypeError, () => cal.mergeFields({}, null),
    "Cannot convert undefined or null to object");

// Test String, number, true, false, NaN, BigInt, Symbol types
// pending on https://github.com/tc39/proposal-temporal/issues/1647
