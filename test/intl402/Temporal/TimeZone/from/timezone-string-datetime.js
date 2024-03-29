// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.from
description: Conversion of ISO date-time strings to Temporal.TimeZone instances (with IANA time zones)
features: [Temporal]
---*/

let timeZone = "2021-08-19T17:30[America/Vancouver]";
const result1 = Temporal.TimeZone.from(timeZone);
assert.sameValue(result1.id, "America/Vancouver", "date-time + IANA annotation is the IANA time zone");

timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result2 = Temporal.TimeZone.from(timeZone);
assert.sameValue(result2.id, "America/Vancouver", "date-time + Z + IANA annotation is the IANA time zone");

timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result3 = Temporal.TimeZone.from(timeZone);
assert.sameValue(result3.id, "America/Vancouver", "date-time + offset + IANA annotation is the IANA time zone");
