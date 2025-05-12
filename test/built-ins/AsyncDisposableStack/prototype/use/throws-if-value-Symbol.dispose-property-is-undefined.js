// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.use
description: Throws if the argument has an undefined-valued Symbol.dispose property.
info: |
  AsyncDisposableStack.prototype.use ( value )

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[DisposableState]]).
  3. If asyncDisposableStack.[[DisposableState]] is disposed, throw a ReferenceError exception.
  4. Perform ? AddDisposableResource(asyncDisposableStack.[[DisposeCapability]], value, async-dispose).
  ...

  AddDisposableResource ( disposeCapability, V, hint [, method ] )

  1. If method is not present then,
    a. If V is either null or undefined and hint is sync-dispose, then
      i. Return unused
    b. Let resource be ? CreateDisposableResource(V, hint).
  ...

  CreateDisposableResource ( V, hint [ , method ] )

  1. If method is not present, then
    a. If V is either null or undefined, then
      i. Set V to undefined
      ii. Set method to undefined
    b. Else,
      i. If Type(V) is not Object, throw a TypeError exception.
      ii. Set method to ? GetDisposeMethod(V, hint).
      iii. If method is undefined, throw a TypeError exception.
  ...

  GetDisposeMethod ( V, hint )

  1. If hint is async-dispose, then
    a. Let method be ? GetMethod(V, @@asyncDispose).
    b. If method is undefined, then
      i. Set method to ? GetMethod(V, @@dispose).
  2. Else,
    a. Let method be ? GetMethod(V, @@dispose).
  3. Return method.

  GetMethod ( V, P )

    1. Let func be ? GetV(V, P).
    2. If func is either undefined or null, return undefined.
    3. ...

features: [explicit-resource-management]
---*/

var stack = new AsyncDisposableStack();
assert.throws(TypeError, function() {
  stack.use({ [Symbol.dispose]: undefined });
}, 'true');
