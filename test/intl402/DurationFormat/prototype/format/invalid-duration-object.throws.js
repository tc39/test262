// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.format
description: >
  "format" basic tests for invalid arguments that should throw TypeError exception.
info: |
  Intl.DurationFormat.prototype.format(duration)
  (...)
  3. Let record be ? ToDurationRecord(duration)
---*/

const df = new Intl.DurationFormat();

assert.throws(RangeError, () => { df.format({
  hours : -1,
  minutes: 10
}), "Throws when mixing negative positive options" });

assert.throws(RangeError, () => { df.format({
  hours : 2,
  minutes: -10
}), "Throws when mixing negative positive options" });

assert.throws(RangeError, () => { df.format({
  hours : -1,
  minutes: 10
}), "Throws when mixing negative positive options" });
