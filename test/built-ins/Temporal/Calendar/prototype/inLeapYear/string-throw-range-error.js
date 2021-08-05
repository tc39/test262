// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.inleapyear
description: Temporal.Calendar.prototype.inLeapYear throw RangeError while ISO8601 string is not a date.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal slot, then
    a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return ! IsISOLeapYear(temporalDateLike.[[ISOYear]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.throws(RangeError, () => cal.inLeapYear("P1Y"),
    "Duration string should throw RangeError");
assert.throws(RangeError, () => cal.inLeapYear("+P1Y"),
    "Duration string should throw RangeError");
assert.throws(RangeError, () => cal.inLeapYear("-P1Y"),
    "Duration string should throw RangeError");
