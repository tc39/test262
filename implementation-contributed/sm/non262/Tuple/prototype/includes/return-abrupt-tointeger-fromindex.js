// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Return abrupt from ToInteger(fromIndex)
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

function TestError() {};

var fromIndex = {
  valueOf: function() {
    throw new TestError();
  }
};

var sample = #[7];

assertThrowsInstanceOf(() => sample.includes(7, fromIndex), TestError);

