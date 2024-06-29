// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var list = {
  '0': 41,
  '1': 42,
  '2': 43,
  length: 3
};
var calls = [];
var thisArg = {};

function mapFn(value) {
  calls.push({
    args: arguments,
    thisArg: this
  });
  return value * 2;
}

var result = Tuple.from(list, mapFn, thisArg);

assert.sameValue(result.length, 3);
assert.sameValue(result[0], 82);
assert.sameValue(result[1], 84);
assert.sameValue(result[2], 86);

assert.sameValue(calls.length, 3);

assert.sameValue(calls[0].args.length, 2);
assert.sameValue(calls[0].args[0], 41);
assert.sameValue(calls[0].args[1], 0);
assert.sameValue(calls[0].thisArg, thisArg);

assert.sameValue(calls[1].args.length, 2);
assert.sameValue(calls[1].args[0], 42);
assert.sameValue(calls[1].args[1], 1);
assert.sameValue(calls[1].thisArg, thisArg);

assert.sameValue(calls[2].args.length, 2);
assert.sameValue(calls[2].args[0], 43);
assert.sameValue(calls[2].args[1], 2);
assert.sameValue(calls[2].thisArg, thisArg);

