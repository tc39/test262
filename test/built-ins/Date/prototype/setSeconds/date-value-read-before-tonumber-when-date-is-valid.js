// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.setseconds
description: >
  Read [[DateValue]] and then call ToNumber when stored time-value is valid.
info: |
  Date.prototype.setSeconds ( sec [ , ms ] )

  ...
  3. Let t be dateObject.[[DateValue]].
  4. Let s be ? ToNumber(sec).
  5. If ms is present, let milli be ? ToNumber(ms).
  6. If t is NaN, return NaN.
  7. Set t to LocalTime(t).
  ...
---*/

var dt = new Date(0);

var valueOfCalled = 0;

var value = {
  valueOf() {
    valueOfCalled++;
    dt.setTime(NaN);
    return 1;
  }
};

var result = dt.setSeconds(value);

assert.sameValue(valueOfCalled, 1, "valueOf called exactly once");

assert.notSameValue(result, NaN, "result is not NaN");

assert.sameValue(result, dt.getTime(), "result is equal to getTime");

assert.sameValue(dt.getSeconds(), 1, "date value correctly updated");
