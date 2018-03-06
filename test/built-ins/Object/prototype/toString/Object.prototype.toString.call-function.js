// Copyright 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.prototype.tostring
description: has a [[Call]] internal method, let builtinTag be "Function".
---*/
assert.sameValue(Object.prototype.toString.call(function() {}), "[object Function]");
assert.sameValue(Object.prototype.toString.call(Object(function() {})), "[object Function]");
assert.sameValue(Object.prototype.toString.call(Function()), "[object Function]");
assert.sameValue(Object.prototype.toString.call(Object(Function())), "[object Function]");
assert.sameValue(Object.prototype.toString.call(new Function()), "[object Function]");
assert.sameValue(Object.prototype.toString.call(Object(new Function())), "[object Function]");
