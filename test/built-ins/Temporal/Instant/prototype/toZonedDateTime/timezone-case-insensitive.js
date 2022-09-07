// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tozoneddatetime
description: Time zone names are case insensitive
features: [Temporal]
---*/

const instance = new Temporal.Instant(0n); 

const timeZone = 'eTc/gMt+1';
const result = instance.toZonedDateTime({ timeZone, calendar: "iso8601" });
assert.sameValue(result.timeZone.id, 'Etc/GMT+1', `Time zone created from string "${timeZone}"`);
