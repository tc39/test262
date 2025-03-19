// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
description: >
  Puts initialized value on the top of the environment's [[DisposableResourceStack]] with multiple lexical bindings
  in a single 'await using' declaration
info: |
  RS: Evaluation
    AwaitUsingDeclaration : CoverAwaitExpressionAndAwaitUsingDeclarationHead BindingList ;

    1. Perform ? BindingEvaluation of BindingList with argument async-dispose.
    2. Return empty.

  RS: BindingEvaluation
    BindingList : BindingList , LexicalBinding

    1. Perform ? BindingEvaluation of BindingList with argument hint.
    2. Perform ? BindingEvaluation of LexicalBinding with argument hint.
    3. Return unused.

    LexicalBinding : BindingIdentifier Initializer

    ...
    5. Return ? InitializeReferencedBinding(lhs, value, hint).

  InitializeReferencedBinding ( V, W )

  ...
  4. Return ? base.InitializeBinding(V.[[ReferencedName]], W).

  InitializeBinding ( N, V, hint )

  ...
  2. If hint is not normal, perform ? AddDisposableResource(envRec.[[DisposeCapability]], V, hint).
  ...

  AddDisposableResource ( disposeCapability, V, hint [, method ] )

  1. If method is not present then,
    a. If V is either null or undefined and hint is sync-dispose, then
      i. Return unused.
    b. Let resource be ? CreateDisposableResource(V, hint).
  3. Else,
    ...
  3. Append resource to disposeCapability.[[DisposableResourceStack]].
  4. Return unused.

flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function() {
  var disposed = [];
  var resource1 = {
      async [Symbol.asyncDispose]() {
          disposed.push(this);
      }
  };
  var resource2 = {
      [Symbol.dispose]() {
          disposed.push(this);
      }
  };
  {
    await using r1 = resource1, r2 = resource2;
  }
  assert.sameValue(2, disposed.length);
  assert.sameValue(disposed[0], resource2, 'Expected resource2 to be the first disposed resource');
  assert.sameValue(disposed[1], resource1, 'Expected resource1 to be the second disposed resource');
});
