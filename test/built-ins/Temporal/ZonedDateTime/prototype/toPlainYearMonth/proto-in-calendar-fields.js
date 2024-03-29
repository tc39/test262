// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.zoneddatetime.prototype.toplainyearmonth
description: If a calendar's fields() method returns a field named '__proto__', PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = TemporalHelpers.calendarWithExtraFields(['__proto__']);
const zoneddatetime = new Temporal.ZonedDateTime(1682892000000000000n, 'Europe/Madrid', calendar);

assert.throws(RangeError, () => zoneddatetime.toPlainYearMonth());
