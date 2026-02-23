// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Test behaviour around DST boundaries without any options set.
features: [Temporal]
---*/

const DSTEnd = {
  year: 2000,
  month: 10,
  day: 29,
  hour: 1,
  minute: 45,
  timeZone: "America/Vancouver"
};

var zdt =  Temporal.ZonedDateTime.from(DSTEnd);
assert.sameValue(`${ zdt }`, "2000-10-29T01:45:00-07:00[America/Vancouver]",
  "Ambiguous zoned date time");

const DSTStart = {
  year: 2000,
  month: 4,
  day: 2,
  hour: 2,
  minute: 30,
  timeZone: "America/Vancouver"
};

var zdt = Temporal.ZonedDateTime.from(DSTStart);
assert.sameValue(`${ zdt }`, "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Zoned date time in non existent time");
