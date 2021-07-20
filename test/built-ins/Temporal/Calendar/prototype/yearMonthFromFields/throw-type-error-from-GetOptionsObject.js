// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will throw TypeError from GetOptionsObject.
  no [[InitializedTemporalCalendar]] in calendar.
info: |
  5. Set options to ? GetOptionsObject(options).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

let notObjectList = [
    null,  "string", Symbol('efg'), true, false, Infinity, NaN, 123, 456n];
notObjectList.forEach(function(options) {
  assert.throws(TypeError, () => cal.yearMonthFromFields({year: 2021, month:7}, options),
    "options is not object");
})
