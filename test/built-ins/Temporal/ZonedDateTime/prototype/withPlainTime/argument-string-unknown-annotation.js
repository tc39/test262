// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.withplaintime
description: Various forms of unknown annotation
features: [Temporal]
---*/

const tests = [
  ["12:34:56.987654321[foo=bar]", "alone"],
  ["12:34:56.987654321[UTC][foo=bar]", "with time zone"],
  ["12:34:56.987654321[u-ca=iso8601][foo=bar]", "with calendar"],
  ["12:34:56.987654321[UTC][foo=bar][u-ca=iso8601]", "with time zone and calendar"],
  ["T12:34:56.987654321[foo=bar]", "with T"],
  ["T12:34:56.987654321[UTC][foo=bar]", "with T and time zone"],
  ["T12:34:56.987654321[u-ca=iso8601][foo=bar]", "with T and calendar"],
  ["T12:34:56.987654321[UTC][foo=bar][u-ca=iso8601]", "with T, time zone, and calendar"],
  ["1970-01-01T12:34:56.987654321[foo=bar]", "with date"],
  ["1970-01-01T12:34:56.987654321[UTC][foo=bar]", "with date and time zone"],
  ["1970-01-01T12:34:56.987654321[u-ca=iso8601][foo=bar]", "with date and calendar"],
  ["1970-01-01T12:34:56.987654321[UTC][foo=bar][u-ca=iso8601]", "with date, time zone, and calendar"],
  ["1970-01-01T12:34:56.987654321[foo=bar][_foo-bar0=Ignore-This-999999999999]", "with another unknown annotation"],
];

const timeZone = "UTC";
const instance = new Temporal.ZonedDateTime(0n, timeZone);

tests.forEach(([arg, description]) => {
  const result = instance.withPlainTime(arg);

  assert.sameValue(
    result.epochNanoseconds,
    45_296_987_654_321n,
    `unknown annotation (${description})`
  );
});
