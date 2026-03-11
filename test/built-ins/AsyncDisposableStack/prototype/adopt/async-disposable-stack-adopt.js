// Copyright (C) 2024 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncdisposablestack.prototype.adopt
description: |
  Test developer exposed AsyncDisposableStack protype methods adopt().
info: |
  AsyncDisposableStack.prototype.adopt ( value, onDisposeAsync )

  1. Let asyncDisposableStack be the this value.
  2. Perform ? RequireInternalSlot(asyncDisposableStack, [[AsyncDisposableState]]).
  3. If asyncDisposableStack.[[AsyncDisposableState]] is ~disposed~, throw a ReferenceError exception.
  4. If IsCallable(onDisposeAsync) is false, throw a TypeError exception.
  5. Let closure be a new Abstract Closure with no parameters that captures value and onDisposeAsync and performs the following steps when called:
     a. Return ? Call(onDisposeAsync, undefined, « value »).
  6. Let F be CreateBuiltinFunction(closure, 0, "", « »).
  7. Perform ? AddDisposableResource(asyncDisposableStack.[[DisposeCapability]], undefined, ~async-dispose~, F).
  8. Return value.

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
  let valuesNormal = [];

  async function TestAsyncDisposableStackAdopt() {
    let stack = new AsyncDisposableStack();
    stack.adopt(42, function(v) {
      valuesNormal.push(v)
    });
    const disposable = {
      value: 1,
      [Symbol.asyncDispose]() {
        valuesNormal.push(43);
      }
    };
    stack.use(disposable);
    stack.adopt(44, function(v) {
      valuesNormal.push(v)
    });
    await stack.disposeAsync();
  };

  await TestAsyncDisposableStackAdopt();
  assert.compareArray(valuesNormal, [44, 43, 42]);
});
