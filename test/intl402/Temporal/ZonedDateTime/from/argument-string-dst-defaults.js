// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Test behaviour around DST boundaries without any options set.
features: [Temporal]
---*/

// Ambiguous zoned date time - Fall DST
const DSTEnd = "2019-02-16T23:45[America/Sao_Paulo]";
var zdt = Temporal.ZonedDateTime.from(DSTEnd);
assert.sameValue(`${ zdt }`, "2019-02-16T23:45:00-02:00[America/Sao_Paulo]",
  "Ambiguous zoned date time");

// Non existent zoned date time - Spring DST
const DSTStart = "2020-03-08T02:30[America/Los_Angeles]";
var zdt = Temporal.ZonedDateTime.from(DSTStart);
assert.sameValue(`${ zdt }`, "2020-03-08T03:30:00-07:00[America/Los_Angeles]",
  "Zoned date time in non existent time");
