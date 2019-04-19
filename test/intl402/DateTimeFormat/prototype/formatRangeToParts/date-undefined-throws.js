// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description:
  Throws a RangeError if startDate or endDate are undefined.
info:
  Intl.DateTimeFormat.prototype.formatRangeToParts ( startDate , endDate )

  1. Let dtf be this value.
  2. If Type(dtf) is not Object, throw a TypeError exception.
  3. If dtf does not have an [[InitializedDateTimeFormat]] internal slot, throw a TypeError exception.
  4. If startDate is undefined or endDate is undefined, throw a RangeError exception.

features: [Intl.DateTimeFormat-formatRange]
---*/
var dtf = new Intl.DateTimeFormat();

var date = new Date();

assert.throws(RangeError, function() {
  dtf.formatRangeToParts(undefined, undefined);
}, "undefined/undefined");

assert.throws(RangeError, function() {
  dtf.formatRangeToParts(date, undefined);
}, "date/undefined");

assert.throws(RangeError, function() {
  dtf.formatRangeToParts(undefined, date);
}, "undefined/date");
