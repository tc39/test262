// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.prototype.zoneddatetimeiso
description: Time zone names are case insensitive
features: [Temporal]
---*/

const timeZone = 'eTc/gMt+1';
const result = Temporal.Now.zonedDateTimeISO(timeZone);
assert.sameValue(result.timeZone.id, 'Etc/GMT+1', `Time zone created from string "${timeZone}"`);
