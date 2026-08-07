// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-get
description: >
  Repeated ns.x access does not re-evaluate barrel or deferred dep
info: |
  [[Get]] ( _P_, _Receiver_ )
    1. ...
    1. Let _m_ be _obj_.[[Module]].
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
    1. Else,
      1. ...
    1. ...

  Once a module reaches ~evaluated~, Evaluate takes the first branch
  and reuses the existing TopLevelCapability promise rather than
  re-running InnerModuleEvaluation. Repeated [[Get]] of the same
  deferred-reexported name therefore re-enters EvaluateModuleSync but
  never re-executes any module body; GetBindingValue returns the same
  already-initialized value.
flags: [module]
features: [export-defer, import-defer]
includes: [compareArray.js]
---*/

import "./setup_FIXTURE.js";
import defer * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, [],
  "barrel and dep both deferred until first interaction with ns");

assert.sameValue(ns.exported, 3, "first read returns the binding's value");
assert.compareArray(globalThis.evaluations, ["barrel", "dep"],
  "first ns.exported triggers barrel then dep evaluation");

assert.sameValue(ns.exported, 3, "second read returns the same value");
assert.compareArray(globalThis.evaluations, ["barrel", "dep"],
  "second ns.exported does not re-evaluate either module");
