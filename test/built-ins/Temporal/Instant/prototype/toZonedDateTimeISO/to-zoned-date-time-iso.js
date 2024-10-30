// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tozoneddatetimeiso
description: Test time zone parameters.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const inst = new Temporal.Instant(1_000_000_000_000_000_000n);

// throws without parameter
assert.throws(TypeError, () => inst.toZonedDateTimeISO());

// time zone parameter UTC
const zdt = inst.toZonedDateTimeISO("UTC");
assert.sameValue(inst.epochNanoseconds, zdt.epochNanoseconds);
assert.sameValue(zdt.timeZoneId, "UTC");

// time zone parameter non-UTC
const zdtNonUTC = inst.toZonedDateTimeISO("-05:00");
assert.sameValue(inst.epochNanoseconds, zdtNonUTC.epochNanoseconds);
TemporalHelpers.assertZonedDateTimesEqual(
    zdtNonUTC,
    Temporal.ZonedDateTime.from("1976-11-18T09:23:30.123456789-05:00[-05:00]"));
