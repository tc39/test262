// Copyright (C) 2023 Justin Grant. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.equals
description: Conversion of ISO date-time strings to the argument of Temporal.TimeZone.prototype.equals
features: [Temporal]
---*/

let tzUTC = Temporal.TimeZone.from("UTC");
let arg = "2021-08-19T17:30";
assert.throws(RangeError, () => tzUTC.equals(arg), "bare date-time string is not a time zone");

arg = "2021-08-19T17:30-07:00:01";
assert.throws(RangeError, () => tzUTC.equals(arg), "ISO string sub-minute offset is not OK as time zone");

arg = "2021-08-19T17:30Z";
tzUTC = Temporal.TimeZone.from(arg);
assert.sameValue(tzUTC.equals(arg), true, "date-time + Z is UTC time zone");

arg = "2021-08-19T17:30-07:00";
tzUTC = Temporal.TimeZone.from(arg);
assert.sameValue(tzUTC.equals(arg), true, "date-time + offset is the offset time zone");

arg = "2021-08-19T17:30[UTC]";
tzUTC = Temporal.TimeZone.from(arg);
assert.sameValue(tzUTC.equals(arg), true, "date-time + IANA annotation is the IANA time zone");

arg = "2021-08-19T17:30Z[UTC]";
tzUTC = Temporal.TimeZone.from(arg);
assert.sameValue(tzUTC.equals(arg), true, "date-time + Z + IANA annotation is the IANA time zone");

arg = "2021-08-19T17:30-07:00[UTC]";
tzUTC = Temporal.TimeZone.from(arg);
assert.sameValue(tzUTC.equals(arg), true, "date-time + offset + IANA annotation is the IANA time zone");
