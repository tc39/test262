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
var summary = "RegExp.prototype[@@match] should check this value.";

print(BUGNUMBER + ": " + summary);

for (var v of [null, 1, true, undefined, "", Symbol.iterator]) {
  assertThrowsInstanceOf(() => RegExp.prototype[Symbol.match].call(v),
                         TypeError);
}

