// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DateTimeFormat.prototype.formatToParts
description: Temporal.ZonedDateTime is not supported directly in formatToParts()
features: [Temporal]
---*/

const formatter = new Intl.DateTimeFormat();

// Check that TypeError would not be thrown for a different reason
const {timeZone, ...options} = formatter.resolvedOptions();
const datetime = new Temporal.ZonedDateTime(0n, timeZone);
assert.sameValue(typeof datetime.toLocaleString(undefined, options), "string", "toLocaleString() with same options succeeds");

assert.throws(TypeError, () => formatter.formatToParts(datetime), "formatToParts() does not support Temporal.ZonedDateTime");
