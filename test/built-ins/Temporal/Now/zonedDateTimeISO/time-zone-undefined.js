// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: Functions when time zone argument is omitted
includes: [compareArray.js]
features: [Temporal]
---*/

const systemTimeZone = Temporal.Now.timeZoneId();

const resultExplicit = Temporal.Now.zonedDateTimeISO(undefined);
assert.sameValue(resultExplicit.getISOFields().timeZone, systemTimeZone, "time zone slot should store a string");

const resultImplicit = Temporal.Now.zonedDateTimeISO();
assert.sameValue(resultImplicit.getISOFields().timeZone, systemTimeZone, "time zone slot should store a string");
