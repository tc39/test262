// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.getplaindatetimefor
description: Calendar names are case-insensitive
features: [Temporal]
---*/

const instance = new Temporal.TimeZone("UTC");

const arg = "jApAnEsE";;
const result = instance.getPlainDateTimeFor(new Temporal.Instant(0n), arg);
assert.sameValue(result.calendar.id, "japanese", "Calendar is case-insensitive");
