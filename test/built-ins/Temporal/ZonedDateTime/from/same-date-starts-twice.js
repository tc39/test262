// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Handles dates with offset transitions.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

// Test date with offset transition where the same day starts twice
// See https://github.com/tc39/proposal-temporal/issues/2938 for more details

const zdt1 = Temporal.ZonedDateTime.from('2010-11-06T00:00:00-02:30[America/St_Johns]');
const zdt2 = Temporal.ZonedDateTime.from('2010-11-07T23:00:00-03:30[America/St_Johns]');
const zdt3 = Temporal.ZonedDateTime.from('2010-11-08T23:00:00-03:30[America/St_Johns]');

const startOfDay2 = Temporal.ZonedDateTime.from('2010-11-07T00:00:00-02:30[America/St_Johns]');
const startOfDay3 = Temporal.ZonedDateTime.from('2010-11-08T00:00:00-03:30[America/St_Johns]');

assert.sameValue(zdt1.hoursInDay, 24);
assert.sameValue(zdt2.hoursInDay, 25);
assert.sameValue(zdt3.hoursInDay, 24);

TemporalHelpers.assertZonedDateTimesEqual(zdt1.startOfDay(), zdt1);
TemporalHelpers.assertZonedDateTimesEqual(zdt2.startOfDay(), startOfDay2);
TemporalHelpers.assertZonedDateTimesEqual(zdt3.startOfDay(), startOfDay3);
