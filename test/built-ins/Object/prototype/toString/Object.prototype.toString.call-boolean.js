// Copyright 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.prototype.tostring
description: has a [[BooleanData]] internal slot, let builtinTag be "Boolean".
---*/
assert.sameValue(Object.prototype.toString.call(true), "[object Boolean]");
assert.sameValue(Object.prototype.toString.call(Object(true)), "[object Boolean]");
assert.sameValue(Object.prototype.toString.call(Boolean(true)), "[object Boolean]");
assert.sameValue(Object.prototype.toString.call(Object(Boolean(true))), "[object Boolean]");
assert.sameValue(Object.prototype.toString.call(new Boolean(true)), "[object Boolean]");
assert.sameValue(Object.prototype.toString.call(Object(new Boolean(true))), "[object Boolean]");
