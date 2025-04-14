// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Throws if the second parameter is not callable.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  10. Let result be Completion(Call(func, undefined, args)).
  ...
  12. Return result.

  Call ( F, V [ , argumentsList ] )

  2. If IsCallable(F) is false, throw a TypeError exception.
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

assert.throws(TypeError, () => {
    asyncVar.run("foo");
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", 1);
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", true);
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", '');
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", null);
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", undefined);
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", Symbol());
});

assert.throws(TypeError, () => {
    asyncVar.run("foo", {});
});
