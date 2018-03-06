// Copyright 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.prototype.tostring
description: is a String exotic object, let builtinTag be "String".
---*/
assert.sameValue(Object.prototype.toString.call(""), "[object String]");
assert.sameValue(Object.prototype.toString.call(Object("")), "[object String]");
assert.sameValue(Object.prototype.toString.call(String("")), "[object String]");
assert.sameValue(Object.prototype.toString.call(Object(String(""))), "[object String]");
assert.sameValue(Object.prototype.toString.call(new String("")), "[object String]");
assert.sameValue(Object.prototype.toString.call(Object(new String(""))), "[object String]");
