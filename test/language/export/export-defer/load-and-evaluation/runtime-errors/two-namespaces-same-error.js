// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-EvaluateModuleSync
description: Two distinct deferred re-exports of x from the same throwing source surface the same error value through both namespaces
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
  try { await import("./reexport1_FIXTURE.js"); } catch (e) { err1 = e; }
  let err2;
  try { await import("./reexport2_FIXTURE.js"); } catch (e) { err2 = e; }

  assert.sameValue(err1.someError, "the error from throws_FIXTURE");
  assert.sameValue(err1, err2, "both namespaces yield the same error value (identity)");
});
