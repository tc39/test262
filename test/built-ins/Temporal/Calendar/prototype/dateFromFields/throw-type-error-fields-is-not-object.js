// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.datefromfields
description: Temporal.Calendar.prototype.dateFromFields should throw TypeError while fields is not object.
info: |
  4. If Type(fields) is not Object, throw a TypeError exception.
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

let notObjectList = [
    null, undefined, "string", Symbol('efg'), true, false, Infinity, NaN, 123, 456n];
notObjectList.forEach(function(fields) {
  assert.throws(TypeError, () => cal.dateFromFields(fields),
    "fields is not object");
})
