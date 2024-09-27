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

// Section numbers cite ES6 rev 24 (2014 April 27).

var sym = Symbol();

// 7.2.2 IsCallable
assertThrowsInstanceOf(() => sym(), TypeError);
assertThrowsInstanceOf(() => Function.prototype.call.call(sym), TypeError);

// 7.2.5 IsConstructor
assertThrowsInstanceOf(() => new sym(), TypeError);
assertThrowsInstanceOf(() => new Symbol(), TypeError);

