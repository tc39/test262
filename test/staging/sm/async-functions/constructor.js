// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1185106;
var summary = "async function constructor and prototype";

print(BUGNUMBER + ": " + summary);

var f1 = async function() {};

var AsyncFunction = f1.constructor;
var AsyncFunctionPrototype = AsyncFunction.prototype;

assert.sameValue(AsyncFunction.name, "AsyncFunction");
assert.sameValue(AsyncFunction.length, 1);
assert.sameValue(Object.getPrototypeOf(async function() {}), AsyncFunctionPrototype);

assert.sameValue(AsyncFunctionPrototype.constructor, AsyncFunction);

var f2 = AsyncFunction("await 1");
assert.sameValue(f2.constructor, AsyncFunction);
assert.sameValue(f2.length, 0);
assert.sameValue(Object.getPrototypeOf(f2), AsyncFunctionPrototype);

var f3 = new AsyncFunction("await 1");
assert.sameValue(f3.constructor, AsyncFunction);
assert.sameValue(f3.length, 0);
assert.sameValue(Object.getPrototypeOf(f3), AsyncFunctionPrototype);

var f4 = AsyncFunction("a", "b", "c", "await 1");
assert.sameValue(f4.constructor, AsyncFunction);
assert.sameValue(f4.length, 3);
assert.sameValue(Object.getPrototypeOf(f4), AsyncFunctionPrototype);

