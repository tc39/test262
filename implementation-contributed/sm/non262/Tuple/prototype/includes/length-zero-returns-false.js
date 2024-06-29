// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Returns false if length is 0 ...
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

var calls = 0;
var fromIndex = {
  valueOf: function() {
    calls++;
  }
};

var sample = #[];
assert.sameValue(sample.includes(0), false, "returns false");
assert.sameValue(sample.includes(), false, "returns false - no arg");
assert.sameValue(sample.includes(0, fromIndex), false, "using fromIndex");
assert.sameValue(calls, 0, "length is checked before ToInteger(fromIndex)");

