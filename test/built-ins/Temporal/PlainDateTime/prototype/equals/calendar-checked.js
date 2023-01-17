// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.equals
description: Calendar is taken into account if the ISO data is equal
includes: [compareArray.js,temporalHelpers.js]
features: [Temporal]
---*/

const actual = [];

function makeCalendar(id, objectName) {
  const calendar = {};
  TemporalHelpers.observeProperty(actual, calendar, "id", id, objectName);
  return calendar;
}

const calendar1 = makeCalendar("A", "calendar1");
const calendar2 = makeCalendar("A", "calendar2");
const calendar3 = makeCalendar("B", "calendar3");
const dt1 = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar1);
const dt1b = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar1);
const dt2 = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar2);
const dt3 = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar3);
actual.splice(0);  // disregard the HasProperty checks done in the constructor

assert.sameValue(dt1.equals(dt1b), true, "same calendar object");
assert.compareArray(actual, []);

assert.sameValue(dt1.equals(dt2), true, "same calendar string");
assert.compareArray(actual, ["get calendar1.id", "get calendar2.id"]);

actual.splice(0);  // empty it for the next check
assert.sameValue(dt1.equals(dt3), false, "different calendar string");
assert.compareArray(actual, ["get calendar1.id", "get calendar3.id"]);

const calendar4 = {
  get id() { TemporalHelpers.assertUnreachable('should not get calendar4.id'); },
};
const calendar5 = {
  get id() { TemporalHelpers.assertUnreachable('should not get calendar5.id'); },
};
const dt4 = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, calendar4);
const dt5 = new Temporal.PlainDateTime(2019, 10, 29, 10, 46, 38, 271, 986, 102, calendar4);
const dt6 = new Temporal.PlainDateTime(2019, 10, 29, 10, 46, 38, 271, 986, 102, calendar5);
assert.sameValue(dt4.equals(dt5), false, "not equal same calendar");
assert.sameValue(dt4.equals(dt6), false, "not equal different calendar");
