// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.use
description: Test use() on a disposed stack.
info: |
  AsyncDisposableStack.prototype.use ( value )

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  3. If asyncDisposableStack.[[AsyncDisposableState]] is disposed, throw a ReferenceError exception.
  4. ...

includes: [asyncHelpers.js]
flags: [async]
features: [explicit-resource-management]
---*/

asyncTest(async function() {
  async function TestAsyncDisposableStackUseOnDisposedStack() {
    let stack = new AsyncDisposableStack();
    const disposable = {
      value: 1,
      [Symbol.asyncDispose]() {
        return 42;
      }
    };
    await stack.disposeAsync();
    stack.use(disposable);
  };

  await assert.throwsAsync(
      ReferenceError, () => TestAsyncDisposableStackUseOnDisposedStack(),
      'Cannot add values to a disposed stack!');
});
