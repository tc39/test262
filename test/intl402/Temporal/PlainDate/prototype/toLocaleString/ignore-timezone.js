// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.tolocalestring
description: Temporal.PlainDate should be interpreted and formatted as wall-clock time
features: [Temporal]
---*/

// A non-existent date in the Pacific/Apia timezone.
const instance = Temporal.PlainDate.from({ year: 2011, month: 12, day: 30 });

assert.sameValue(
  instance.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  '12/30/2011'
);

assert.sameValue(
  instance.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  instance.toLocaleString('en-US')
);

assert.sameValue(
  instance.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  instance.toLocaleString('en-US', { timeZone: 'UTC' })
);
