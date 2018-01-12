// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.utc
es6id: 20.3.3.4
description: non-integer values are converted to integers using `ToInteger`
info: |
  [...]
  9. Return TimeClip(MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli))).
  MakeDay (year, month, date)
---*/

assert.sameValue(Date.UTC(1970.9, 0.9, 1.9, 0.9, 0.9, 0.9, 0.9), 0, 'positive non-integer values');
assert.sameValue(Date.UTC(-1970.9, -0.9, -0.9, -0.9, -0.9, -0.9, -0.9), -124334438400000, 'negative non-integer values');
