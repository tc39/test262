// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ContinueDynamicImport
description: >
  import() rejects with SyntaxError when the deferred-reexport dep has a parse error
info: |
  ContinueDynamicImport ( _promiseCapability_, _moduleCompletion_, _phase_ ) — change introduced by deferred-reexports:
    1. ...
    1. Let _module_ be _moduleCompletion_.[[Value]].
    1. Let _loadPromise_ be _module_.LoadRequestedModules(~all~).
    1. Let _rejectedClosure_ be a new Abstract Closure with parameters (_reason_) that captures _promiseCapability_ and performs the following steps when called:
      1. Perform ! Call(_promiseCapability_.[[Reject]], *undefined*, « _reason_ »).
      1. ...
    1. Let _onRejected_ be CreateBuiltinFunction(_rejectedClosure_, 1, "", « »).
    1. Let _linkAndEvaluateClosure_ be a new Abstract Closure with no parameters that captures _module_, _promiseCapability_, _phase_ and _onRejected_ and performs the following steps when called:
      1. Let _link_ be Completion(_module_.Link(~all~)).
      1. If _link_ is an abrupt completion, then
        1. Perform ! Call(_promiseCapability_.[[Reject]], undefined, « _link_.[[Value]] »).
      1. ...
    1. ...
    1. Perform PerformPromiseThen(_loadPromise_, _linkAndEvaluate_, _onRejected_).
    1. ...

  Passing ~all~ to LoadRequestedModules makes the loader traverse
  [[OptionalIndirectExportEntries]] (the slot that records `export
  defer ... from`). A parse error in a deferred-reexport dep therefore
  rejects _loadPromise_; PerformPromiseThen routes that rejection to
  _onRejected_, which rejects the dynamic import's outer promise with
  the SyntaxError before any module body in the graph runs.
flags: [module, async]
features: [export-defer, dynamic-import]
includes: [asyncHelpers.js, compareArray.js]
---*/

import "./setup_FIXTURE.js";

asyncTest(async function () {
  await assert.throwsAsync(SyntaxError,
    () => import("./barrel-with-syntax-error_FIXTURE.js"),
    "import rejects with SyntaxError due to deferred-reexport dep parse error");

  assert.compareArray(globalThis.evaluations, [],
    "barrel does not evaluate when its deferred-reexport dep fails to parse");
});
