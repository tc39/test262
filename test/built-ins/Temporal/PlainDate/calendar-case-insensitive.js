// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.constructor
description: Calendar names are case-insensitive
features: [Temporal]
---*/

const arg = "jApAnEsE";

const result = new Temporal.PlainDate(2000, 5, 2, arg);
assert.sameValue(result.calendar.id, "japanese", "Calendar is case-insensitive");
