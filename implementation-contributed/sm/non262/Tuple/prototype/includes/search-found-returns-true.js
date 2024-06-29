// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  returns true for found index
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

var symbol = Symbol("1");
var tuple = #[];
var record = #{};

var sample = #[42, "test262", null, undefined, true, false, 0, -1, "", symbol, tuple, record];

assert.sameValue(sample.includes(42), true, "42");
assert.sameValue(sample.includes("test262"), true, "'test262'");
assert.sameValue(sample.includes(null), true, "null");
assert.sameValue(sample.includes(undefined), true, "undefined");
assert.sameValue(sample.includes(true), true, "true");
assert.sameValue(sample.includes(false), true, "false");
assert.sameValue(sample.includes(0), true, "0");
assert.sameValue(sample.includes(-1), true, "-1");
assert.sameValue(sample.includes(""), true, "the empty string");
assert.sameValue(sample.includes(symbol), true, "symbol");
assert.sameValue(sample.includes(tuple), true, "tuple");
assert.sameValue(sample.includes(record), true, "record");

