// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.formatRange
description: >
  "format" basic tests when arguments are not  temporalDurationLike Objects should throw TypeError exception.
info: |
  Intl.DurationFormat.prototype.format(duration)
  (...)
  3. Let record be ? ToPartialDuration(duration).
---*/

const df = new Intl.DurationFormat();

assert.throws(TypeError, () => { df.format(undefined) });
assert.throws(TypeError, () => { df.format(-12) });
assert.throws(TypeError, () => { df.format(-12n) });
assert.throws(TypeError, () => { df.format(1) });
assert.throws(TypeError, () => { df.format(2n) });
assert.throws(TypeError, () => { df.format(Symbol())});
