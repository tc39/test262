// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function calls the passed callback with the arguments passed to
  the returned function.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    ...
    c. Let result be Completion(Call(fn, thisArgument, args)).
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").
features: [AsyncContext]
---*/

function callback(a, b, c) {
  assert.sameValue(a, 'foo', 'The first argument must be "foo".');
  assert.sameValue(b, 'bar', 'The second argument must be "bar".');
  assert.sameValue(c, 'baz', 'The second argument must be "baz".');
}

const wrapped = AsyncContext.Snapshot.wrap(callback);

wrapped('foo', 'bar', 'baz');
