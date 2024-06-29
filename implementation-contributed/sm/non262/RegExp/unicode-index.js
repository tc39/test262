// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-RegExp-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- Pattern match should start from lead surrogate when lastIndex points corresponding trail surrogate.";

print(BUGNUMBER + ": " + summary);

var r = /\uD83D\uDC38/ug;
r.lastIndex = 1;
var str = "\uD83D\uDC38";
var result = r.exec(str);
assert.sameValue(result.length, 1);
assert.sameValue(result[0], "\uD83D\uDC38");

// This does not match to ES6 spec, but the spec will be changed.
assert.sameValue(result.index, 0);

