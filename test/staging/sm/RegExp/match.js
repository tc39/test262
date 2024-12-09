// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-RegExp-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 887016;
var summary = "Implement RegExp.prototype[@@match].";

print(BUGNUMBER + ": " + summary);

assert.sameValue(RegExp.prototype[Symbol.match].name, "[Symbol.match]");
assert.sameValue(RegExp.prototype[Symbol.match].length, 1);
var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, Symbol.match);
assert.sameValue(desc.configurable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.writable, true);

var re = /a/;
var v = re[Symbol.match]("abcAbcABC");
assert.sameValue(Array.isArray(v), true);
assert.sameValue(v.length, 1);
assert.sameValue(v[0], "a");

re = /d/;
v = re[Symbol.match]("abcAbcABC");
assert.sameValue(v, null);

re = /a/ig;
v = re[Symbol.match]("abcAbcABC");
assert.sameValue(Array.isArray(v), true);
assert.sameValue(v.length, 3);
assert.sameValue(v[0], "a");
assert.sameValue(v[1], "A");
assert.sameValue(v[2], "A");

re = /d/g;
v = re[Symbol.match]("abcAbcABC");
assert.sameValue(v, null);

