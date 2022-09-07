// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.withcalendar
description: Calendar names are case-insensitive
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(1976, 11, 18, { id: "replace-me" });

const arg = "jApAnEsE";;
const result = instance.withCalendar(arg);
assert.sameValue(result.calendar.id, "japanese", "Calendar is case-insensitive");
