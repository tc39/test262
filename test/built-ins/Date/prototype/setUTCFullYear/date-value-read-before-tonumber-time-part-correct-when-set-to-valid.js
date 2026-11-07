// Copyright (C) 2026 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.setutcfullyear
description: >
  Read [[DateValue]] and in ToNumber modify date-time to a valid value
info: |
  Date.prototype.setUTCFullYear ( year [ , month [ , date ] ] )

  ...
  3. Let t be dateObject.[[DateValue]].
  4. If t is NaN, set t to +0𝔽.
  5. Let y be ? ToNumber(year).
  ...
---*/

var dt = new Date(0);
dt.setUTCHours(1, 2, 3, 4);

var valueOfCalled = 0;

var value = {
  valueOf() {
    valueOfCalled++;

    // This call should get ignored.
    dt.setTime(36 * 60 * 60 * 1000);

    return 1;
  }
};

var result = dt.setUTCFullYear(value);

assert.sameValue(valueOfCalled, 1, "valueOf called exactly once");

assert.notSameValue(result, NaN, "result is not NaN");

assert.sameValue(result, dt.getTime(), "result is equal to getTime");

assert.sameValue(dt.getUTCFullYear(), 1, "date value correctly updated");

assert.sameValue(dt.getUTCHours(), 1, "hours value still intact");
assert.sameValue(dt.getUTCMinutes(), 2, "minutes value correctly updated");
assert.sameValue(dt.getUTCSeconds(), 3, "seconds value correctly updated");
assert.sameValue(dt.getUTCMilliseconds(), 4, "milliseconds value correctly updated");
