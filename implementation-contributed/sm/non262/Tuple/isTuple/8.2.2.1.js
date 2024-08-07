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
---*//*
8.2.2
The Tuple constructor:
...
has the following properties:
...

8.2.2.1 Tuple.isTuple ( arg )
The isTuple function takes one argument arg, and performs the following steps:

1. Return ! IsTuple(arg).
*/

var Tuple_isTuple = Tuple.isTuple;
assert.sameValue(typeof Tuple_isTuple, "function");

assert.sameValue(Tuple_isTuple(), false);
assert.sameValue(Tuple_isTuple(Tuple.prototype), false);
assert.sameValue(Tuple_isTuple([]), false);
assert.sameValue(Tuple_isTuple(42), false);
assert.sameValue(Tuple_isTuple(new Number(-50)), false);
assert.sameValue(Tuple_isTuple(undefined), false);
assert.sameValue(Tuple_isTuple(true), false);
assert.sameValue(Tuple_isTuple(new Boolean(false)), false);
assert.sameValue(Tuple_isTuple("hello"), false);
assert.sameValue(Tuple_isTuple(new String("bye")), false);
assert.sameValue(Tuple_isTuple({}), false);
assert.sameValue(Tuple_isTuple(null), false);
assert.sameValue(Tuple_isTuple(new RegExp()), false);
assert.sameValue(Tuple_isTuple(JSON), false);
assert.sameValue(Tuple_isTuple(Math), false);
assert.sameValue(Tuple_isTuple(new Date()), false);
assert.sameValue(Tuple_isTuple(new SyntaxError()), false);
var arg;
function fun() { arg = arguments; }(1, 2, 3);
assert.sameValue(Tuple_isTuple(arg), false);
assert.sameValue(Tuple_isTuple(this), false);
assert.sameValue(Tuple_isTuple(function() {}), false);
var proto = Tuple.prototype;
var Con = function() {};
Con.prototype = proto;
var child = new Con();
assert.sameValue(Tuple_isTuple(child), false);
assert.sameValue(Tuple_isTuple({0: 1, 1: 2, length: 2}), false);

assert.sameValue(Tuple_isTuple.call(1), false);
assert.sameValue(Tuple_isTuple.call(#[1]), false);
assert.sameValue(Tuple_isTuple.call(undefined, 1), false);
assert.sameValue(Tuple_isTuple.call(undefined, undefined), false);
assert.sameValue(Tuple_isTuple.call(undefined, #[1]), true);
assert.sameValue(Tuple_isTuple.call(undefined, Object(#[1])), true);

