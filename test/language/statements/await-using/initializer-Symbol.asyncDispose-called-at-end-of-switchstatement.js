// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-switch-statement-runtime-semantics-evaluation
description: Initialized value is disposed at end of a SwitchStatement
info: |
  RS: Evaluation
    SwitchStatement : switch ( Expression ) CaseBlock

    ...
    7. Let R be Completion(CaseBlockEvaluation of CaseBlock with argument switchValue).
    8. Set R to Completion(DisposeResources(blockEnv.[[DisposeCapability]], R)).
    9. Assert: If R.[[Type]] is normal, then R.[[Value]] is not empty.
    ..

  DisposeResources ( disposeCapability, completion )

  1. For each resource of disposeCapability.[[DisposableResourceStack]], in reverse list order, do
    a. Let result be Dispose(resource.[[ResourceValue]], resource.[[Hint]], resource.[[DisposeMethod]]).
    b. If result.[[Type]] is throw, then
      i. If completion.[[Type]] is throw, then
        1. Set result to result.[[Value]].
        2. Let suppressed be completion.[[Value]].
        3. Let error be a newly created SuppressedError object.
        4. Perform ! CreateNonEnumerableDataPropertyOrThrow(error, "error", result).
        5. Perform ! CreateNonEnumerableDataPropertyOrThrow(error, "suppressed", suppressed).
        6. Set completion to ThrowCompletion(error).
      ii. Else,
        1. Set completion to result.
  2. Return completion.

  Dispose ( V, hint, method )

  1. If method is undefined, let result be undefined.
  2. Else, let result be ? Call(method, V).
  3. If hint is async-dispose, then
    a. Perform ? Await(result).
  4. Return undefined.

flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  var resource = {
      disposed: false,
      async [Symbol.asyncDispose]() {
          this.disposed = true;
      }
  };

  switch (0) {
    default:
      await using _ = resource;
      break;
  }

  assert.sameValue(resource.disposed, true, 'Expected resource to have been disposed');
});
