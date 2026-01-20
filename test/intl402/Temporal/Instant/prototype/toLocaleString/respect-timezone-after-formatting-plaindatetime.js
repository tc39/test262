// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tolocalestring
description: Formatting a Plain* object should not break the formatter for Instant.
features: [Temporal]
---*/

const datestring = '2026-03-29T02:30:15+01:00';
const instant = Temporal.Instant.from(datestring);
const pdt = Temporal.PlainDateTime.from(datestring);

assert.sameValue(
  pdt.toLocaleString('en', { timeStyle: 'long' }),
  '2:30:15 AM'
);

assert.sameValue(
  instant.toLocaleString('en', { timeStyle: 'long', timeZone: 'America/Los_Angeles' }),
  '6:30:15 PM PDT'
);

assert.sameValue(
  instant.toLocaleString('en', { timeStyle: 'long', timeZone: 'Europe/Berlin' }),
  '3:30:15 AM GMT+2'
);

assert.sameValue(
  new Temporal.PlainDate(2011, 12, 30).toLocaleString('en'),
  '12/30/2011'
),

assert.sameValue(
  new Temporal.Instant(0n).toLocaleString("en", { era: "narrow" }),
  new Date(0).toLocaleString(["en"], { era: "narrow" })
);
