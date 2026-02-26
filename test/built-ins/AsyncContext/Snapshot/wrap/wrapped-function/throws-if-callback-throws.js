// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function throws if the callback throws, with the same thrown
  value.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
      c. Let result be Completion(Call(fn, thisArgument, args)).
      ...
      e. Return result.
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").
features: [AsyncContext]
---*/

function CustomError() { }

const wrapped = AsyncContext.Snapshot.wrap(() => {
  throw new CustomError();
});

assert.throws(CustomError, () => {
  wrapped();
});
