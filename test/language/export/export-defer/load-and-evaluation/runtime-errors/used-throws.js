// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-EvaluateModuleSync
description: When a deferred re-export binding is statically imported and read, the source's runtime error propagates to the consumer
info: |
  EvaluateModuleSync ( module [ , importedNames ] )
    1. ...
    1. Let promise be module.Evaluate(importedNames).
    1. Assert: promise.[[PromiseState]] is either FULFILLED or REJECTED.
    1. If promise.[[PromiseState]] is REJECTED, then
       1. If promise.[[PromiseIsHandled]] is false, perform HostPromiseRejectionTracker(promise, "handle").
       1. Set promise.[[PromiseIsHandled]] to true.
       1. Return ThrowCompletion(promise.[[PromiseResult]]).
    1. ...

  Evaluate ( [ importedNames ] )
    1. ...
    1. For each ModuleRequest Record request of optionalIndirectRequests, do
      1. Let requiredModule be GetImportedModule(module, request).
      1. Assert: requiredModule.[[Status]] is one of LINKED, EVALUATING-ASYNC, or EVALUATED.
      1. Let innerPromise be requiredModule.Evaluate(request.[[ImportedNames]]).
      1. If innerPromise.[[PromiseState]] is REJECTED, return innerPromise.
      1. Append innerPromise to promises.
    1. ...

flags: [module, async]
features: [export-defer, dynamic-import]
includes: [asyncHelpers.js]
---*/

import "./setup_FIXTURE.js";

asyncTest(async () => {
  let err;
  await import("./uses-x_FIXTURE.js").catch((e) => { err = e; });
  assert.sameValue(
    err.someError,
    "the error from throws_FIXTURE",
    "evaluation error from deferred source propagates"
  );
});
