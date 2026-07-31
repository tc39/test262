// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function calls the passed callback with the this value that the
  returned function was called with.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    a. Let thisArgument be the this value.
    ...
    c. Let result be Completion(Call(fn, thisArgument, args)).
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").
features: [AsyncContext]
---*/

const thisValue = {};

function callback() {
  assert.sameValue(
    this,
    thisValue,
    'Callback is called with `thisValue` as its this value.'
  );
}

const wrapped = AsyncContext.Snapshot.wrap(callback);

wrapped.apply(thisValue);
