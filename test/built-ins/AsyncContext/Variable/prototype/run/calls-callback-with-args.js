// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Calls the second parameter as a function, passing any arguments after the
  second to it.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  10. Let result be Completion(Call(func, undefined, args)).
  ...
  12. Return result.
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

const obj = {};
const symbol = Symbol();

let called = false;

asyncVar.run("foo", callback, 42, "bar", obj, symbol);

assert(called, 'The `callback` function was called.');

function callback() {
  assert.sameValue(arguments.length, 4);
  assert.sameValue(arguments[0], 42);
  assert.sameValue(arguments[1], "bar");
  assert.sameValue(arguments[2], obj);
  assert.sameValue(arguments[3], symbol);
  called = true;
}
