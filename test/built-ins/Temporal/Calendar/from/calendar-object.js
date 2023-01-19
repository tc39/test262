// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.from
description: Converting a plain object to Temporal.Calendar gives the same object
features: [Temporal]
---*/

const custom = { id: "custom-calendar" };
assert.sameValue(Temporal.Calendar.from(custom), custom);
