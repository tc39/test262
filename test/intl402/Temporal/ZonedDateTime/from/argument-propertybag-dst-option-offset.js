// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Test behaviour around DST boundaries with the option offset set, when the argument is a property bag.
features: [Temporal]
---*/

// Ambiguous zoned date time - Fall DST
const DSTEnd = {
  year: 2000,
  month: 10,
  day: 29,
  timeZone: "America/Vancouver"
};

// First 1:30 when DST ends
var zdt = Temporal.ZonedDateTime.from({
  ...DSTEnd,
  hour: 1,
  minute: 30,
  offset: "-07:00"
}, { offset: "prefer" });
assert.sameValue(`${ zdt }`,
  "2000-10-29T01:30:00-07:00[America/Vancouver]",
  "Option offset: prefer and bag's offset matches time zone, ambiguous time (first 1:30)");

// Second 1:30 when DST ends
var zdt = Temporal.ZonedDateTime.from({
  ...DSTEnd,
  hour: 1,
  minute: 30,
  offset: "-08:00"
}, { offset: "prefer" });
assert.sameValue(`${ zdt }`,
  "2000-10-29T01:30:00-08:00[America/Vancouver]",
  "Option offset: prefer and bag's offset matches time zone, ambiguous time (second 1:30)");

var zdt = Temporal.ZonedDateTime.from({
  ...DSTEnd,
  hour: 4,
  offset: "-07:00"
}, { offset: "prefer" });
assert.sameValue(`${ zdt }`,
  "2000-10-29T04:00:00-08:00[America/Vancouver]",
  "Option offset: prefer, and bag's offset does not match time zone, ambiguous time");

var zdt = Temporal.ZonedDateTime.from({
  ...DSTEnd,
  hour: 4,
  offset: "-12:00"
}, { offset: "ignore" });
assert.sameValue(`${ zdt }`,
  "2000-10-29T04:00:00-08:00[America/Vancouver]",
  "Option offset: ignore, and bag's offset does not match time zone, ambiguous time");

// The option { offset: 'use' } does not use a wrong offset.
var zdt = Temporal.ZonedDateTime.from({
  ...DSTEnd,
  hour: 4,
  offset: "-07:00"
}, { offset: "use" });
assert.sameValue(`${ zdt }`,
  "2000-10-29T03:00:00-08:00[America/Vancouver]",
  "Option offset: use, and bag's offset is wrong, ambiguous time");

// Non existent zoned date time - Spring DST
const DSTStart = {
  year: 2000,
  month: 4,
  day: 2,
  hour: 2,
  minute: 30,
  timeZone: "America/Vancouver"
};

var zdt = Temporal.ZonedDateTime.from(
  DSTStart,
  { offset: "ignore" });
assert.sameValue(`${ zdt }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Option offset: ignore, non existent time");

var zdt = Temporal.ZonedDateTime.from({
  ...DSTStart,
  offset: "-23:59"
}, { offset: prefer });
assert.sameValue(`${ zdt }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Offset is wrong and option offset: prefer, non existent time");
