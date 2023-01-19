// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.zoneddatetime
description: Observable interactions with the provided calendar-like object
includes: [compareArray.js, temporalHelpers.js]
features: [Proxy, Temporal]
---*/

const actual = [];

const calendar = TemporalHelpers.calendarObserver(actual, "calendar", {
  toString: "iso8601",
});

Object.defineProperty(Temporal.Calendar, 'from', {
  get() {
    actual.push('get Temporal.Calendar.from');
    return undefined;
  },
});

Temporal.Now.zonedDateTime(calendar);

assert.compareArray(actual, [], 'no observable operations should be invoked');
