// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-zoneddatetime-objects
description: Temporal.ZonedDateTime.prototype.withCalendar()
features: [Temporal]
---*/

var zdt = Temporal.ZonedDateTime.from("2019-11-18T15:23:30.123456789-08:00[-08:00]");

// zonedDateTime.withCalendar(japanese) works
assert.sameValue(`${ zdt.withCalendar("japanese") }`, "2019-11-18T15:23:30.123456789-08:00[-08:00][u-ca=japanese]");

// keeps instant and time zone the same
var zdt = Temporal.ZonedDateTime.from("2019-11-18T15:23:30.123456789+01:00[+01:00][u-ca=iso8601]");
var zdt2 = zdt.withCalendar("japanese");
assert.sameValue(zdt.epochNanoseconds, zdt2.epochNanoseconds);
assert.sameValue(zdt2.getISOFields().calendar, "japanese");
assert.sameValue(zdt2.timeZoneId, "+01:00");
