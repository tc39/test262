// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver-EnsureDeferredNamespaceEvaluation
description: Namespace [[Get]] of a deferred re-export with an erroring source throws on first access and on every subsequent access with the same error value
info: |
  [[Get]] ( P, Receiver )
    1. ...
    1. If m is a Cyclic Module Record and m.GetOptionalIndirectExportsModuleRequests(« P ») is not empty, then
      1. Perform ? EvaluateModuleSync(m, « P »).
    1. ...

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
    1. If module.[[Status]] is either EVALUATING-ASYNC or EVALUATED, then
      1. Assert: module.[[CycleRoot]].[[TopLevelCapability]] is not EMPTY.
      1. Let topLevelPromise be module.[[CycleRoot]].[[TopLevelCapability]].[[Promise]].
    1. ...
    1. If topLevelPromise.[[PromiseState]] is rejected, return topLevelPromise.

flags: [module, async]
features: [export-defer, dynamic-import]
includes: [asyncHelpers.js]
---*/

import "./setup_FIXTURE.js";

asyncTest(async () => {
  let err1;
  try { await import("./barrel-defer-throws_FIXTURE.js"); } catch (e) { err1 = e; }
  assert.sameValue(err1.someError, "the error from throws_FIXTURE");

  let err2;
  try { await import("./barrel-defer-throws_FIXTURE.js"); } catch (e) { err2 = e; }
  assert.sameValue(err2, err1, "subsequent accesses throw the same error value");
});
