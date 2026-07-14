// Copyright (C) 2026 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.setfullyear
description: >
  Read [[DateValue]] and in ToNumber modify date-time to an invalid value
info: |
  Date.prototype.setFullYear ( year [ , month [ , date ] ] )

  ...
  3. Let t be dateObject.[[DateValue]].
  4. Let y be ? ToNumber(year).
  5. If t is NaN, set t to +0𝔽; otherwise, set t to LocalTime(t).
  ...
---*/

var dt = new Date(0);
dt.setHours(1, 2, 3, 4);

var valueOfCalled = 0;

var value = {
  valueOf() {
    valueOfCalled++;

    // This call should get ignored.
    dt.setTime(NaN);

    return 1;
  }
};

var result = dt.setFullYear(value);

assert.sameValue(valueOfCalled, 1, "valueOf called exactly once");

assert.notSameValue(result, NaN, "result is not NaN");

assert.sameValue(result, dt.getTime(), "result is equal to getTime");

assert.sameValue(dt.getFullYear(), 1, "date value correctly updated");

assert.sameValue(dt.getHours(), 1, "hours value still intact");
assert.sameValue(dt.getMinutes(), 2, "minutes value correctly updated");
assert.sameValue(dt.getSeconds(), 3, "seconds value correctly updated");
assert.sameValue(dt.getMilliseconds(), 4, "milliseconds value correctly updated");
