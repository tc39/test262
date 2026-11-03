// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Calls the first parameter as a function, passing any arguments after the
  first to it.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  4. Let result be Completion(Call(func, undefined, args)).
  ...
  6. Return result.
features: [AsyncContext]
---*/

const asyncSnapshot = new AsyncContext.Snapshot();

const obj = {};
const symbol = Symbol();

let called = false;

asyncSnapshot.run(callback, 42, "bar", obj, symbol);

assert(called, 'The `callback` function was called.');

function callback() {
  assert.sameValue(arguments.length, 4);
  assert.sameValue(arguments[0], 42);
  assert.sameValue(arguments[1], "bar");
  assert.sameValue(arguments[2], obj);
  assert.sameValue(arguments[3], symbol);
  called = true;
}
