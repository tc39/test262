// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Test behaviour around DST boundaries with the option disambiguation set, when the argument is a property bag.
features: [Temporal]
---*/

// Disambiguation options

// Ambiguous zoned date time - Fall DST
const DSTEnd = {
  year: 2000,
  month: 10,
  day: 29,
  hour: 1,
  minute: 45,
  timeZone: "America/Vancouver"
};
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "compatible" }) }`,
  "2000-10-29T01:45:00-07:00[America/Vancouver]",
  "Option disambiguation: compatible, ambiguous time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "earlier" }) }`,
  "2000-10-29T01:45:00-07:00[America/Vancouver]",
  "Option disambiguation: earlier, ambiguous time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "later" }) }`,
  "2000-10-29T01:45:00-08:00[America/Vancouver]",
  "Option disambiguation: later, ambiguous time");
assert.throws(RangeError, () =>
  Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "reject" }),
  "Option disambiguation: reject, ambiguous time");

// Zoned date time in non existent time - Spring DST
const DSTStart = {
  year: 2000,
  month: 4,
  day: 2,
  hour: 2,
  minute: 30,
  timeZone: "America/Vancouver"
};
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "compatible" }) }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Option disambiguation: compatible, non existent time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "earlier" }) }`,
  "2000-04-02T01:30:00-08:00[America/Vancouver]",
  "Option disambiguation: earlier, non existent time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "later" }) }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Option disambiguation: later, non existent time");
assert.throws(RangeError, () =>
  Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "reject" }),
  "Option disambiguation: reject, non existent time");
