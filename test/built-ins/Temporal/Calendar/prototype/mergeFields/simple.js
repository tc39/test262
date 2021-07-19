// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.mergefields
description: Temporal.Calendar.prototype.mergeFields will merge data.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. Set fields to ? ToObject(fields).
  5. Set additionalFields to ? ToObject(additionalFields).
  6. Return ? DefaultMergeFields(fields, additionalFields).
features: [Temporal]
includes: [compareArray.js]
---*/
let cal = new Temporal.Calendar("iso8601")

// Assert only string will be merged
assert(compareArray({}, cal.mergeFields({1: 2}, {3: 4})));
assert(compareArray({}, cal.mergeFields({true: 2}, {false: 4})));
assert(compareArray({}, cal.mergeFields({1n: 2}, {2n: 4})));
assert(compareArray({}, cal.mergeFields({Infinity: 2}, {Infinity: 4})));
assert(compareArray({}, cal.mergeFields({undefined: 2}, {NaN: 4})));
assert(compareArray({}, cal.mergeFields({["foo"]: 2}, {["bar"]: 4})));
assert(compareArray({a:1, b:2, c:4}, cal.mergeFields({a: 1, b: 2}, {b:3, c:4})));
