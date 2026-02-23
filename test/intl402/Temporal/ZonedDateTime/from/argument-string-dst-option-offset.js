// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-zoneddatetime-objects
description: Test behaviour around DST boundaries with the option offset set, when the argument is a string.
features: [Temporal]
---*/

// Fall DST end
var zdt = Temporal.ZonedDateTime.from(
  "2020-11-01T01:30-07:00[America/Los_Angeles]",
  { offset: "prefer" });
assert.sameValue(
  zdt.toString(),
  "2020-11-01T01:30:00-07:00[America/Los_Angeles]",
  "Option offset: prefer and offset matches time zone (first 1:30 when DST ends)");

var zdt = Temporal.ZonedDateTime.from(
  "2020-11-01T01:30[America/Los_Angeles]",
  { offset: "prefer" });
assert.sameValue(
  zdt.toString(),
  "2020-11-01T01:30:00-07:00[America/Los_Angeles]",
  "Option offset: prefer and string argument is ambiguous");

var zdt = Temporal.ZonedDateTime.from(
  "2020-11-01T01:30-08:00[America/Los_Angeles]",
  { offset: "prefer" });
assert.sameValue(
  zdt.toString(),
  "2020-11-01T01:30:00-08:00[America/Los_Angeles]",
  "Option offset: prefer and offset matches time zone (second 1:30 when DST ends)");

var zdt = Temporal.ZonedDateTime.from(
  "2020-11-01T04:00-07:00[America/Los_Angeles]",
  { offset: "prefer" });
assert.sameValue(
  zdt.toString(),
  "2020-11-01T04:00:00-08:00[America/Los_Angeles]",
  "Option offset: prefer and offset does not match time zone, DST end");

var zdt = Temporal.ZonedDateTime.from(
  "2020-11-01T04:00-07:00[America/Los_Angeles]",
  { offset: "use" });
assert.sameValue(
  zdt.toString(),
  "2020-11-01T03:00:00-08:00[America/Los_Angeles]",
  "Option offset: use and wrong offset, DST end");

var zdt = Temporal.ZonedDateTime.from(
  "2020-11-01T04:00-12:00[America/Los_Angeles]",
  { offset: "ignore" });
assert.sameValue(
  zdt.toString(),
  "2020-11-01T04:00:00-08:00[America/Los_Angeles]",
  "Option offset: ignore and wrong offset, DST end");

// Spring DST start
var zdt = Temporal.ZonedDateTime.from(
  "2020-03-08T02:30[America/Los_Angeles]",
  { offset: "ignore" });
assert.sameValue(
  zdt.toString(),
  "2020-03-08T03:30:00-07:00[America/Los_Angeles]",
  "Option offset: ignore, DST start");

var zdt = Temporal.ZonedDateTime.from(
  "2020-03-08T02:30-23:59[America/Los_Angeles]",
  { offset: "prefer" });
assert.sameValue(
  zdt.toString(),
  "2020-03-08T03:30:00-07:00[America/Los_Angeles]",
  "Option offset: ignore and wrong offset, DST start");
