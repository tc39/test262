// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.move
description: Test developer exposed AsyncDisposableStack protype method move.
info: |
  AsyncDisposableStack.prototype.move ( )

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  3. If asyncDisposableStack.[[AsyncDisposableState]] is ~disposed~, throw a ReferenceError exception.
  4. Let newAsyncDisposableStack be ? OrdinaryCreateFromConstructor(%AsyncDisposableStack%, "%AsyncDisposableStack.prototype%", « [[AsyncDisposableState]], [[DisposeCapability]] »).
  5. Set newAsyncDisposableStack.[[AsyncDisposableState]] to ~pending~.
  6. Set newAsyncDisposableStack.[[DisposeCapability]] to asyncDisposableStack.[[DisposeCapability]].
  7. Set asyncDisposableStack.[[DisposeCapability]] to NewDisposeCapability().
  8. Set asyncDisposableStack.[[AsyncDisposableState]] to ~disposed~.
  9. Return newAsyncDisposableStack.

features: [explicit-resource-management]
---*/

// Two stacks should not be the same --------
(function TestAsyncDisposableStackMoveNotSameObjects() {
  let stack = new AsyncDisposableStack();
  const firstDisposable = {
    value: 1,
    [Symbol.asyncDispose]() {
      return 42;
    }
  };
  const secondDisposable = {
    value: 2,
    [Symbol.asyncDispose]() {
      return 43;
    }
  };
  stack.use(firstDisposable);
  stack.use(secondDisposable);
  let newStack = stack.move();
  assert.notSameValue(stack, newStack);
})();
