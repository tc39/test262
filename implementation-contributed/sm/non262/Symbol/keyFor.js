// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Symbol-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

assert.sameValue(Symbol.keyFor(Symbol.for("moon")), "moon");
assert.sameValue(Symbol.keyFor(Symbol.for("")), "");
assert.sameValue(Symbol.keyFor(Symbol("moon")), undefined);
assert.sameValue(Symbol.keyFor(Symbol.iterator), undefined);

assertThrowsInstanceOf(() => Symbol.keyFor(), TypeError);
assertThrowsInstanceOf(() => Symbol.keyFor(Object(Symbol("moon"))), TypeError);

assert.sameValue(Symbol.keyFor.length, 1);

