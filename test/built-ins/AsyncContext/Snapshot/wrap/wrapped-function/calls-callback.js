// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function calls the passed callback.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    ...
    c. Let result be Completion(Call(fn, thisArgument, args)).
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").
features: [AsyncContext]
---*/

let timesCalled = 0;

function callback() {
  timesCalled++;
}

const wrapped = AsyncContext.Snapshot.wrap(callback);

wrapped();

assert.sameValue(timesCalled, 1, 'The callback must be called once.');
