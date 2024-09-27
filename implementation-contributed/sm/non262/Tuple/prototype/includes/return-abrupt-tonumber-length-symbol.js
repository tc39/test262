// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Return abrupt from ToNumber(symbol "length")
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

var obj = {
  length: Symbol("1")
};

assertThrowsInstanceOf(() => #[].includes.call(obj, 7), TypeError);

