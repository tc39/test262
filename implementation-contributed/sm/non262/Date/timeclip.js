// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Date-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommonn.org/licenses/publicdomain/
 */

var BUGNUMBER = 747197;
var summary = "TimeClip behavior for very large numbers";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function addToLimit(n) { return 8.64e15 + n; }

assert.sameValue(8.64e15 === addToLimit(0.0), true);
assert.sameValue(8.64e15 === addToLimit(0.5), true);
assert.sameValue(8.64e15 === addToLimit(0.5000000000000001), false);

var times =
  [Number.MAX_VALUE,
   -Number.MAX_VALUE,
   Infinity,
   -Infinity,
   addToLimit(0.5000000000000001),
   -addToLimit(0.5000000000000001)];

for (var i = 0, len = times.length; i < len; i++)
{
  var d = new Date();
  assert.sameValue(d.setTime(times[i]), NaN, "times[" + i + "]");
  assert.sameValue(d.getTime(), NaN);
  assert.sameValue(d.valueOf(), NaN);
}

/******************************************************************************/

print("Tests complete");
