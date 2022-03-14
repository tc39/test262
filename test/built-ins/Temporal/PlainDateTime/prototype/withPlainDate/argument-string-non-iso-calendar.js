// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: Switching to a non-ISO calendar is acceptable
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);

assert.sameValue(
  `${dt.withCalendar('japanese').withPlainDate('2008-09-06')}`,
  '2008-09-06T03:24:30[u-ca=japanese]',
  'result contains a non-ISO calendar if present in the input'
);
