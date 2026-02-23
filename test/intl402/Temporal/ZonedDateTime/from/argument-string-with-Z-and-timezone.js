// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-zoneddatetime-objects
description: >
  Test that "Z" and a timezone in a string argument preserves the exact time in
  the given time zone.
features: [Temporal]
---*/

assert.sameValue(
  Temporal.ZonedDateTime.from(
    "2020-03-08T09:00:00Z[America/Los_Angeles]"
  ).toString(),
  "2020-03-08T01:00:00-08:00[America/Los_Angeles]");
