// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: Invoked with a value that can be converted to an object
info: >
    1. Let to be ToObject(target).
    2. ReturnIfAbrupt(to).
    3. If only one argument was passed, return to.
features: [Symbol]
---*/

var target, result;

result = Object.assign(true);

assert(result instanceof Boolean);
assert.sameValue(result.valueOf(), true);

result = Object.assign(4);

assert(result instanceof Number);
assert.sameValue(result.valueOf(), 4);

result = Object.assign('str');

assert(result instanceof String);
assert.sameValue(result.valueOf(), 'str');

target = Symbol('sym');
result = Object.assign(target);

assert(result !== target, 'result is distinct from target');
assert(result instanceof Symbol, 'result is a Symbol');
assert.sameValue(
  result.toString(), 'Symbol(sym)', 'result is created from target'
);

target = {};
result = Object.assign(target);

assert.sameValue(result, target);
