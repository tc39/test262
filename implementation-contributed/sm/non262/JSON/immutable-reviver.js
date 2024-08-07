// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-JSON-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
const values = [];

const result = JSON.parseImmutable('{"x":1,"a":[1,2,{},[]]}', function (k, v) {
	values.push(#[k, v]);
	return v;
});

assert.sameValue(result, #{x: 1, a: #[1, 2, #{}, #[]]});

const next = () => values.shift();
assert.sameValue(next(), #["x", 1]);
assert.sameValue(next(), #["0", 1]);
assert.sameValue(next(), #["1", 2]);
assert.sameValue(next(), #["2", #{}]);
assert.sameValue(next(), #["3", #[]]);
assert.sameValue(next(), #["a", #[1, 2, #{}, #[]]]);
assert.sameValue(next(), #["", result]);
assert.sameValue(values.length, 0);

