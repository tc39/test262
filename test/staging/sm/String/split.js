// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
  - noStrict
description: |
  Call RegExp.prototype[@@split] from String.prototype.split.
esid: pending
---*/

var called = 0;
var myRegExp = {
  [Symbol.split](S, limit) {
    assert.sameValue(S, "abcAbcABC");
    assert.sameValue(limit, 10);
    called++;
    return ["X", "Y", "Z"];
  }
};
assert.sameValue("abcAbcABC".split(myRegExp, 10).join(","), "X,Y,Z");
assert.sameValue(called, 1);
