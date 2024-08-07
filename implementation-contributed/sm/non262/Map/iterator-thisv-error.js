// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Map-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

function test(fn, thisv) {
  var message;
  try {
    fn.call(thisv);
  } catch (e) {
    message = e.message;
  }

  assert.sameValue(/^\w+ method called on incompatible.+/.test(message), true);
  assert.sameValue(message.includes("std_"), false);
}

for (var thisv of [null, undefined, false, true, 0, ""]) {
  test(Map.prototype.values, thisv);
  test(Map.prototype.keys, thisv);
  test(Map.prototype.entries, thisv);
  test(Map.prototype[Symbol.iterator], thisv);
}

