// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.move
description: `move()` moves resources to a new stack and disposes the old stack.
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

  AsyncDisposableStack.prototype.disposeAsync

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  3. If asyncDisposableStack.[[AsyncDisposableState]] is ~disposed~, return undefined.
  4. Set asyncDisposableStack.[[AsyncDisposableState]] to ~disposed~.
  5. Return ? DisposeResources(asyncDisposableStack.[[DisposeCapability]], NormalCompletion(undefined)).

  DisposeResources ( disposeCapability, completion )

  1. Let needsAwait be false.
  2. Let hasAwaited be false.
  3. For each element resource of disposeCapability.[[DisposableResourceStack]], in reverse List order, do
     a. Let value be resource.[[ResourceValue]].
     b. Let kind be resource.[[Kind]].
     c. Let method be resource.[[DisposeMethod]].
     d. If kind is ~sync-dispose~ and needsAwait is true and hasAwaited is false, then
          i. Perform ! Await(undefined).
         ii. Set needsAwait to false.
     e. If method is not undefined, then
          i. Let result be Completion(Call(method, value)).
         ii. If result is a normal completion and kind is async-dispose, then
             1. Set result to Completion(Await(result.[[Value]])).
             2. Set hasAwaited to true.
        iii. If result is a throw completion, then
             ...
     f. Else,
        ...
  4. If needsAwait is true and hasAwaited is false, then
     a. Perform ! Await(undefined).
  5. NOTE: After disposeCapability has been disposed, it will never be used again. The contents of
     disposeCapability.[[DisposableResourceStack]] can be discarded in implementations, such as by
     garbage collection, at this point.
  6. Set disposeCapability.[[DisposableResourceStack]] to a new empty List.
  7. Return ? completion.

includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [explicit-resource-management]
---*/

asyncTest(async function() {
  let values = [];
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
  await stack.disposeAsync();
  assert.compareArray(values, []);

  await newStack.disposeAsync();
  assert.compareArray(values, [43, 42]);
})();
