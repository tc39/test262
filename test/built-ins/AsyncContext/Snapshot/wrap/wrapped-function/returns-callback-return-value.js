// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function returns the value the passed callback returns.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    ...
    c. Let result be Completion(Call(fn, thisArgument, args)).
    ...
    e. Return result.
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").
features: [AsyncContext]
---*/

function callback() {
  return 42;
}

const wrapped = AsyncContext.Snapshot.wrap(callback);

assert.sameValue(wrapped(), 42, 'The callback must return 42.');
