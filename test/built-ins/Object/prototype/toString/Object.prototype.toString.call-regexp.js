// Copyright 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.prototype.tostring
description: has a [[RegExpMatcher]] internal slot, let builtinTag be "RegExp".
---*/
assert.sameValue(Object.prototype.toString.call(/./), "[object RegExp]");
assert.sameValue(Object.prototype.toString.call(Object(/./)), "[object RegExp]");
assert.sameValue(Object.prototype.toString.call(new RegExp()), "[object RegExp]");
assert.sameValue(Object.prototype.toString.call(Object(new RegExp())), "[object RegExp]");
