// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-disposeresources
description: >
  Throws a nested hierarchy of SuppressedErrors if multiple errors were thrown during evaluation of subsequent statements following 'using'
  and/or from disposal.
info: |
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

features: [explicit-resource-management]
---*/

class MyError extends Error {}
const error1 = new MyError();
const error2 = new MyError();
const error3 = new MyError();

try {
  using _1 = { [Symbol.dispose]() { throw error1; } };
  using _2 = { [Symbol.dispose]() { throw error2; } };
  throw error3;
}
catch (e) {
  assert(e instanceof SuppressedError, "Expected an SuppressedError to have been thrown");
  assert.sameValue(e.error, error1, "Expected the outermost suppressing error to have been 'error1'");
  assert(e.suppressed instanceof SuppressedError, "Expected the outermost suppressed error to have been a SuppressedError");
  assert.sameValue(e.suppressed.error, error2, "Expected the innermost suppressing error to have been 'error2'");
  assert.sameValue(e.suppressed.suppressed, error3, "Expected the innermost suppressed error to have been 'error3'");
}
