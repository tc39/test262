// Copyright (C) 2017 V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: #sec-date.prototype.tostring
description: Date.prototype.toString throws a TypeError on non-Date receivers
---*/

assert.throws(TypeError, () => Date.prototype.toString());
assert.throws(TypeError, () => Date.prototype.toString.call(undefined));
assert.throws(TypeError, () => Date.prototype.toString.call(0));
assert.throws(TypeError, () => Date.prototype.toString.call({}));
