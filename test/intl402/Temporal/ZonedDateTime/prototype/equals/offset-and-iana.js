// Copyright (C) 2023 Justin Grant. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.equals
description: Offset string time zones compare as expected
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "America/Los_Angeles");
const otz1 = new Temporal.TimeZone("+05:30");
const otz2 = new Temporal.TimeZone("+0530");
const tz = new Temporal.TimeZone("Asia/Kolkata");
assert(zdt.withTimeZone(otz1).equals(zdt.withTimeZone(otz2)), "+05:30 = +0530");
assert(zdt.withTimeZone(otz2).equals(zdt.withTimeZone(otz1)), "+0530 = +05:30");
assert(zdt.withTimeZone(otz1).equals(zdt.withTimeZone("+05:30")), "+05:30 = +05:30 string ID");
assert(zdt.withTimeZone(otz1).equals(zdt.withTimeZone(otz2).toString()), "+05:30 = +0530 IXDTF string");
assert(!zdt.withTimeZone(otz1).equals(zdt.withTimeZone("Asia/Kolkata")), "+05:30 != Asia/Kolkata string ID");
assert(!zdt.withTimeZone(otz1).equals(zdt.withTimeZone(tz)), "+05:30 != Asia/Kolkata");
assert(!zdt.withTimeZone(otz1).equals(zdt.withTimeZone(tz).toString()), "+05:30 != Asia/Kolkata IXDTF string");
