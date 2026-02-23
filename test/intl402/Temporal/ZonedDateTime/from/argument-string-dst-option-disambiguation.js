// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: >
  Test behaviour around DST boundaries with the option disambiguation set, when
  the argument is a string.
features: [Temporal]
---*/

// Ambiguous zoned date time - Fall DST
const DSTEnd = "2019-02-16T23:45[America/Sao_Paulo]";
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "compatible" }) }`,
  "2019-02-16T23:45:00-02:00[America/Sao_Paulo]",
  "Option disambiguation: compatible ambiguous time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "earlier" }) }`,
  "2019-02-16T23:45:00-02:00[America/Sao_Paulo]",
  "Option disambiguation: earlier, ambiguous time");
assert.sameValue(
`${ Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "later" }) }`,
  "2019-02-16T23:45:00-03:00[America/Sao_Paulo]",
  "Option disambiguation: later, ambiguous time");
assert.throws(RangeError, () =>
  Temporal.ZonedDateTime.from(DSTEnd, { disambiguation: "reject" }),
  "Option disambiguation: reject, ambiguous time");

// Zoned date time in non existent time - Spring DST
const DSTStart = "2020-03-08T02:30[America/Los_Angeles]";
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "compatible" }) }`,
  "2020-03-08T03:30:00-07:00[America/Los_Angeles]",
  "Option disambiguation: compatible, non existent time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "earlier" }) }`,
  "2020-03-08T01:30:00-08:00[America/Los_Angeles]",
  "Option disambiguation: earlier, non existent time");
assert.sameValue(
  `${ Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "later" }) }`,
  "2020-03-08T03:30:00-07:00[America/Los_Angeles]",
  "Option disambiguation: later, non existent time");
assert.throws(RangeError, () =>
  Temporal.ZonedDateTime.from(DSTStart, { disambiguation: "reject" }),
  "Option disambiguation: reject, non existent time");
