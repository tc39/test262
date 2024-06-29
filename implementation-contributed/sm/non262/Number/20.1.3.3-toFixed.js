// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Number-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

assert.sameValue(Number.prototype.toFixed.call(-Infinity), "-Infinity");
assert.sameValue(Number.prototype.toFixed.call(Infinity), "Infinity");
assert.sameValue(Number.prototype.toFixed.call(NaN), "NaN");

assertThrowsInstanceOf(() => Number.prototype.toFixed.call(-Infinity, 555), RangeError);
assertThrowsInstanceOf(() => Number.prototype.toFixed.call(Infinity, 555), RangeError);
assertThrowsInstanceOf(() => Number.prototype.toFixed.call(NaN, 555), RangeError);

assertThrowsInstanceOf(() => Number.prototype.toFixed.call("Hello"), TypeError);

