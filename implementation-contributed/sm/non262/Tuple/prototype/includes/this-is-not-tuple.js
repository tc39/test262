// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
  Throws a TypeError exception when `this` cannot be coerced to Tuple
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

var includes = Tuple.prototype.includes;

assertThrowsInstanceOf(() => includes.call(undefined, 42), TypeError,
		       "this is undefined");

assertThrowsInstanceOf(() => includes.call(null, 42), TypeError,
		       "this is null");

