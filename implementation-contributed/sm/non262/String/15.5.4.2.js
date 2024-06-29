// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-String-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assert.sameValue(raisesException(TypeError)('String.prototype.toString.call(42)'), true);
assert.sameValue(raisesException(TypeError)('String.prototype.toString.call(true)'), true);
assert.sameValue(raisesException(TypeError)('String.prototype.toString.call({})'), true);
assert.sameValue(raisesException(TypeError)('String.prototype.toString.call(null)'), true);
assert.sameValue(raisesException(TypeError)('String.prototype.toString.call([])'), true);
assert.sameValue(raisesException(TypeError)('String.prototype.toString.call(undefined)'), true);
assert.sameValue(completesNormally('String.prototype.toString.call("")'), true);

