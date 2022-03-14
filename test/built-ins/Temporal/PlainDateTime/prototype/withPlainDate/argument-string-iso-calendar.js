// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaindate
description: New calendar is preserved if original PDT has ISO calendar
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(1995, 12, 7, 3, 24, 30);

assert.sameValue(
  `${dt.withPlainDate('2008-09-06[u-ca=japanese]')}`,
  '2008-09-06T03:24:30[u-ca=japanese]',
  'calendar is unchanged if input has ISO calendar'
);
