// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.defer
description: |
  Test developer exposed AsyncDisposableStack protype method defer().
info: |
  AsyncDisposableStack.prototype.defer ( )

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  3. If asyncDisposableStack.[[AsyncDisposableState]] is disposed, throw a ReferenceError exception.
  4. If IsCallable(onDisposeAsync) is false, throw a TypeError exception.
  5. Perform ? AddDisposableResource(asyncDisposableStack.[[DisposeCapability]], undefined, ~async-dispose~, onDisposeAsync).
  6. Return undefined.

  AddDisposableResource ( disposeCapability, V, kind [, method ] )

  1. If method is not present, then
     a. If V is either null or undefined and kind is ~sync-dispose~, return unused.
     b. NOTE: When V is either null or undefined and kind is ~async-dispose~, we record that the resource was evaluated to ensure we will still perform an Await when resources are later disposed.
     c. Let resource be ? CreateDisposableResource(V, kind).
  2. Else,
     a. Assert: V is undefined.
     b. Let resource be ? CreateDisposableResource(undefined, kind, method).
  3. Append resource to disposeCapability.[[DisposableResourceStack]].
  4. Return unused.

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
  let deferValuesNormal = [];

  async function TestAsyncDisposableStackDefer() {
    let stack = new AsyncDisposableStack();
    stack.defer(() => deferValuesNormal.push(42));
    const disposable = {
      value: 1,
      [Symbol.asyncDispose]() {
        deferValuesNormal.push(43);
      }
    };
    stack.use(disposable);
    stack.defer(() => deferValuesNormal.push(44));
    await stack.disposeAsync();
  };

  await TestAsyncDisposableStackDefer();
  assert.compareArray(deferValuesNormal, [44, 43, 42]);
});
