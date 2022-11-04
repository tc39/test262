// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.tostring
description: Properties on objects passed to toString() are accessed in the correct order
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const expected = [
  "get options.roundingMode",
  "get options.roundingMode.toString",
  "call options.roundingMode.toString",
  "get options.calendarName",
  "get options.calendarName.toString",
  "call options.calendarName.toString",
  "get options.timeZoneName",
  "get options.timeZoneName.toString",
  "call options.timeZoneName.toString",
  "get options.offset",
  "get options.offset.toString",
  "call options.offset.toString",
  "get this.timeZone.getOffsetNanosecondsFor",
  "call this.timeZone.getOffsetNanosecondsFor",
  "get this.timeZone.getOffsetNanosecondsFor",
  "call this.timeZone.getOffsetNanosecondsFor",
  "get this.timeZone[Symbol.toPrimitive]",
  "get this.timeZone.toString",
  "call this.timeZone.toString",
  "get this.calendar[Symbol.toPrimitive]",
  "get this.calendar.toString",
  "call this.calendar.toString",
];
const actual = [];

const timeZone = TemporalHelpers.timeZoneObserver(actual, "this.timeZone");
const calendar = TemporalHelpers.calendarObserver(actual, "this.calendar");
const instance = new Temporal.ZonedDateTime(0n, timeZone, calendar);
// clear observable operations that occurred during the constructor call
actual.splice(0);

const expectedForSmallestUnit = [
  "get options.smallestUnit",
  "get options.smallestUnit.toString",
  "call options.smallestUnit.toString",
].concat(expected);

instance.toString(
  TemporalHelpers.propertyBagObserver(actual, {
    fractionalSecondDigits: 3,
    roundingMode: "halfExpand",
    smallestUnit: "millisecond",
    offset: "auto",
    timeZoneName: "auto",
    calendarName: "auto",
  }, "options"),
);
assert.compareArray(actual, expectedForSmallestUnit, "order of operations");
actual.splice(0); // clear

const expectedForFractionalSecondDigits = [
  "get options.smallestUnit",
  "get options.fractionalSecondDigits",
  "get options.fractionalSecondDigits.toString",
  "call options.fractionalSecondDigits.toString",
].concat(expected);

instance.toString(
  TemporalHelpers.propertyBagObserver(actual, {
    fractionalSecondDigits: "auto",
    roundingMode: "halfExpand",
    smallestUnit: undefined,
    offset: "auto",
    timeZoneName: "auto",
    calendarName: "auto",
  }, "options"),
);
assert.compareArray(actual, expectedForFractionalSecondDigits, "order of operations with smallestUnit undefined");
