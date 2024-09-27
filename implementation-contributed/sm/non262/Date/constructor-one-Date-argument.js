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

var BUGNUMBER = 1187233;
var summary =
  "Passing a Date object to |new Date()| should copy it, not convert it to " +
  "a primitive and create it from that.";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

Date.prototype.toString = Date.prototype.valueOf = null;
var d = new Date(new Date(8675309));
assert.sameValue(d.getTime(), 8675309);

Date.prototype.valueOf = () => 42;
d = new Date(new Date(8675309));
assert.sameValue(d.getTime(), 8675309);

var D = newGlobal().Date;

D.prototype.toString = D.prototype.valueOf = null;
var d = new Date(new D(3141592654));
assert.sameValue(d.getTime(), 3141592654);

D.prototype.valueOf = () => 525600;
d = new Date(new D(3141592654));
assert.sameValue(d.getTime(), 3141592654);

/******************************************************************************/

print("Tests complete");
