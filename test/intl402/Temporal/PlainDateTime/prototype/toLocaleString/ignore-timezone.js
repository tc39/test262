// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.tolocalestring
description: Temporal.PlainDateTime should be interpreted and formatted as wall-clock time
features: [Temporal]
---*/

// A non-existent date in the Pacific/Apia timezone.
const instance1 = Temporal.PlainDateTime.from( { year: 2011, month: 12, day: 30 });

assert.sameValue(
  instance1.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  '12/30/2011, 12:00:00 AM'
);

assert.sameValue(
  instance1.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  instance1.toLocaleString('en-US')
);

assert.sameValue(
  instance1.toLocaleString('en-US', { timeZone: 'Pacific/Apia' }),
  instance1.toLocaleString('en-US', { timeZone: 'UTC' })
);

// A non-existent time in the 'America/Los_Angeles' timezone.
const instance2 = new Temporal.PlainDateTime(2026, 3, 8, 2, 30);

assert.sameValue(
  instance2.toLocaleString('en-US'),
  instance2.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
)

assert.sameValue(
  instance2.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
  '3/8/2026, 2:30:00 AM'
)

assert.sameValue(
  instance2.toLocaleString('en-US', { timeZone: 'UTC' }),
  instance2.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
)

// Creating the instance from a datestring with an offset has no effect.

const instance3 = Temporal.PlainDateTime.from('2026-03-29T02:30:15+01:00');

assert.sameValue(
  instance3.toLocaleString('en', { timeStyle: 'long' }),
  '2:30:15 AM'
);

assert.sameValue(
  instance3.toLocaleString('en', { timeStyle: 'long' }),
  instance3.toLocaleString('en', { timeStyle: 'long', timeZone: 'America/New_York' }),
);
