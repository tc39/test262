// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will throw TypeError when fields is not object.
  no [[InitializedTemporalCalendar]] in calendar.
info: |
  4. If Type(fields) is not Object, throw a TypeError exception.
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

let notObjectList = [
    null, undefined, "string", Symbol('efg'), true, false, Infinity, NaN, 123, 456n];
notObjectList.forEach(function(fields) {
  assert.throws(TypeError, () => cal.yearMonthFromFields(fields),
    "fields is not object");
})
