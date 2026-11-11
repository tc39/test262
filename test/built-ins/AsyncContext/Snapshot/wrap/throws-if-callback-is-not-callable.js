// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Throws if the argument is not callable.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  1. If IsCallable(fn) is false, throw a TypeError exception.
features: [AsyncContext]
---*/

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap();
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap(1);
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap(true);
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap('');
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap(null);
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap(undefined);
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap(Symbol());
});

assert.throws(TypeError, () => {
    AsyncContext.Snapshot.wrap({});
});
