// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Throws if the first parameter is not callable.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  4. Let result be Completion(Call(func, undefined, args)).
  ...
  6. Return result.

  Call ( F, V [ , argumentsList ] )

  2. If IsCallable(F) is false, throw a TypeError exception.
features: [AsyncContext]
---*/

const asyncSnapshot = new AsyncContext.Snapshot();

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo");
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", 1);
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", true);
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", '');
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", null);
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", undefined);
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", Symbol());
});

assert.throws(TypeError, () => {
    asyncSnapshot.run("foo", {});
});
