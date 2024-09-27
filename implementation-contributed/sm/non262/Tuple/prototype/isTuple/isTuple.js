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
---*/var f = Tuple.isTuple;

assert.sameValue(typeof f, "function");
assert.sameValue(f.length, 1);
assert.sameValue(f(#[]), true);
assert.sameValue(f(#[1]), true);
assert.sameValue(f(#[1,2,3]), true);
assert.sameValue(f(Object(#[])), true);
assert.sameValue(f(Object(#[1])), true);
assert.sameValue(f(Object(#[1,2,3])), true);

for (thing of [42, new Number(-42), undefined, true, false, "abc" , new String("a\nb\\!"), {}, [], [1,2,3], new Uint8Array(1,2,3), null, new RegExp(), JSON, new SyntaxError(), function() {}, Math, new Date()]) {
    assert.sameValue(f(thing), false);
}
assert.sameValue(f(Tuple.prototype), false);
var arg;
(function fun() { arg = arguments; }(1,2,3));
assert.sameValue(f(arg), false);
assert.sameValue(f(this), false);

var proto = [];
var Con = function() {};
Con.prototype = proto;

var child = new Con();

assert.sameValue(f(child), false);

var proto = Tuple.prototype;
var Con = function() {};
Con.prototype = proto;

var child = new Con();

assert.sameValue(f(child), false);

assert.sameValue(f({
  0: 12,
  1: 9,
  length: 2
}), false);


