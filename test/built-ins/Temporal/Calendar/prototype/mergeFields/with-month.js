// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.mergefields
description: Temporal.Calendar.prototype.mergeFields will merge data while there are month or monthCode in the data.
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

assert(compareArray({a:1, b:2, c:4, month:5},
    cal.mergeFields({a: 1, b: 2}, {b:3, c:4, month:5})));
assert(compareArray({a:1, b:2, c:4, month:5, month:'M06'},
    cal.mergeFields({a: 1, b: 2}, {b:3, c:4, month:5, monthCode:'M06'})));
assert(compareArray({a:1, b:2, c:4, month:'M06'}, cal.mergeFields({a: 1, b: 2},
      {b:3, c:4, monthCode:'M06'})));

assert(compareArray({a:1, b:2, c:4, month:5},
    cal.mergeFields({a: 1, b: 2, month:7}, {b:3, c:4, month:5})));
assert(compareArray({a:1, b:2, c:4, month:5},
    cal.mergeFields({a: 1, b: 2, month:7, monthCode:'M08'},
      {b:3, c:4, month:5})));
assert(compareArray({a:1, b:2, c:4, monthCode:'M06'},
    cal.mergeFields({a: 1, b: 2, month:7}, {b:3, c:4, monthCode:'M06'})));
assert(compareArray({a:1, b:2, c:4, monthCode:'M06'},
    cal.mergeFields({a: 1, b: 2, month:7, monthCode:'M08'},
      {b:3, c:4, monthCode:'M06'})));
assert(compareArray({a:1, b:2, c:4, month:5, monthCode:'M06'},
    cal.mergeFields({a: 1, b: 2, month:7},
      {b:3, c:4, month:5, monthCode:'M06'})));
assert(compareArray({a:1, b:2, c:4, month:5, monthCode:'M06'},
    cal.mergeFields({a: 1, b: 2, month:7, monthCode:'M08'},
      {b:3, c:4, month:5, monthCode:'M06'})));

assert(compareArray({a:1, b:2, c:4, month:7},
    cal.mergeFields({a: 1, b: 2, month:7}, {b:3, c:4})));
assert(compareArray({a:1, b:2, c:4, month:5, monthCode:'M08'},
    cal.mergeFields({a: 1, b: 2, month:7, monthCode:'M08'}, {b:3, c:4})));
assert(compareArray({a:1, b:2, c:4, month:7, monthCode:'M08'},
    cal.mergeFields({a: 1, b: 2, month:7, monthCode:'M08'}, {b:3, c:4})));
assert(compareArray({a:1, b:2, c:4, monthCode:'M08'},
    cal.mergeFields({a: 1, b: 2, monthCode:'M08'}, {b:3, c:4})));
