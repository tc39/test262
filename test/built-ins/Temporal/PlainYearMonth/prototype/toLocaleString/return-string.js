// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.tolocalestring
description: toLocaleString returns a string.
features: [Temporal]
---*/

const pym = new Temporal.PlainYearMonth(1, 1);

assert.sameValue(typeof pym.toLocaleString(), "string");
