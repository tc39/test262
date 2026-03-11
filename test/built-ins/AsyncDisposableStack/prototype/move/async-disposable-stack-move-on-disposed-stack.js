// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.move
description: Test move() on a disposed-stack.
info: |
  AsyncDisposableStack.prototype.move ( )

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  3. If asyncDisposableStack.[[AsyncDisposableState]] is ~disposed~, throw a ReferenceError exception.
  4. ...

includes: [asyncHelpers.js]
flags: [async]
features: [explicit-resource-management]
---*/

// move() method on disposed stack --------
asyncTest(async function() {
  async function TestAsyncDisposableStackMoveOnDisposedStack() {
    let stack = new AsyncDisposableStack();
    await stack.disposeAsync();
    let newStack = stack.move();
  };

  await assert.throwsAsync(
      ReferenceError, () => TestAsyncDisposableStackMoveOnDisposedStack(),
      'Cannot move elements from a disposed stack!');
});
