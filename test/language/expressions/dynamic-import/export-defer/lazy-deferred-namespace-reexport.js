// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ContinueDynamicImport
description: >
  import() observes lazy `export defer * as ns from` namespace re-export
info: |
  ContinueDynamicImport ( _promiseCapability_, _moduleCompletion_, _phase_ )
    1. ...
    1. Let _module_ be _moduleCompletion_.[[Value]].
    1. Let _loadPromise_ be _module_.LoadRequestedModules(~all~).
    1. ...
    1. Let _linkAndEvaluateClosure_ be a new Abstract Closure that captures
       _module_, _promiseCapability_, _phase_ and _onRejected_ and performs:
      1. Let _link_ be Completion(_module_.Link(~all~)).
      1. ...
    1. ...

  [[Get]] ( _P_, _Receiver_ )
    1. ...
    1. Let _m_ be _O_.[[Module]].
    1. If _m_ is a Cyclic Module Record and _m_.GetOptionalIndirectExportsModuleRequests(« _P_ »)
       is not empty, then
      1. Perform ? EvaluateModuleSync(_m_, « _P_ »).
    1. Let _binding_ be _m_.ResolveExport(_P_).
    1. ...
    1. Let _targetEnv_ be _binding_.[[Module]].[[Environment]].
    1. Return ? _targetEnv_.GetBindingValue(_binding_.[[BindingName]], *true*).

  EvaluateModuleSync ( _module_ [ , _importedNames_ ] )
    1. If _importedNames_ is not present, set _importedNames_ to « ».
    1. If ReadyForSyncExecution(_module_, _importedNames_) is false, throw a TypeError exception.
    1. Let _promise_ be _module_.Evaluate(_importedNames_).
    1. Assert: _promise_.[[PromiseState]] is either ~fulfilled~ or ~rejected~.
    1. ...

  Evaluate ( _importedNames_ )
    1. ...
    1. If _importedNames_ is not present, set _importedNames_ to « ».
    1. If _module_.[[Status]] is either ~evaluating-async~ or ~evaluated~, then
      1. Assert: _module_.[[CycleRoot]].[[TopLevelCapability]] is not ~empty~.
      1. Let _topLevelPromise_ be _module_.[[CycleRoot]].[[TopLevelCapability]].[[Promise]].
    1. ...

  Passing ~all~ to LoadRequestedModules and Link makes them traverse
  [[OptionalIndirectExportEntries]] (the slot that records `export
  defer ... from` declarations). The deferred dep is loaded and linked
  at load time — only its body evaluation is deferred.
flags: [module, async]
features: [export-defer, dynamic-import]
includes: [asyncHelpers.js, compareArray.js]
---*/

import "./setup_FIXTURE.js";

asyncTest(async function () {
  const ns = await import("./ns-reexport-barrel_FIXTURE.js");

  assert.compareArray(globalThis.evaluations, ["barrel"],
    "barrel evaluated by await import; deferred dep not yet evaluated");

  const nsRe = ns.nsRe;
  assert.sameValue(typeof nsRe, "object",
    "ns.nsRe resolves to a (deferred) namespace object");
  assert.sameValue(nsRe[Symbol.toStringTag], "Deferred Module",
    "the namespace re-exported via `export defer * as nsRe` is a deferred namespace");

  assert.compareArray(globalThis.evaluations, ["barrel"],
    "reading ns.nsRe does not evaluate the deferred dep");

  assert.sameValue(nsRe.exported, 3,
    "reading a property of the deferred namespace resolves to the dep's value");

  assert.compareArray(globalThis.evaluations, ["barrel", "dep"],
    "property access on nsRe triggers deferred dep evaluation");
});
