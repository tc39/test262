// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-GatherAsynchronousTransitiveDependenciesForRequests
description: A deferred re-export whose source uses top-level await is gathered into the async dependency graph and resolved before the entrypoint accesses it
info: |
  1. Evaluate ( [ importedNames ] )
    1. ...
    1. Else,
        1. ...
        1. Let _result_ be Completion(InnerModuleEvaluation(_module_, _stack_, 0)).
        1. ...
    1. ...
    1. Let _optionalIndirectRequests_ be _module_.GetOptionalIndirectExportsModuleRequests(_importedNames_).
    1. Let _promises_ be « _topLevelPromise_ ».
    1. For each ModuleRequest Record _request_ of _optionalIndirectRequests_, do
        1. ...
        1. Let _innerPromise_ be _requiredModule_.Evaluate(_request_.[[ImportedNames]]).
        1. ...
        1. Append _innerPromise_ to _promises_.
    1. If _promises_ contains a Promise _P_ such that _P_.[[PromiseState]] is ~pending~, then
        1. ...
        1. Return ! SafePerformPromiseAll(...).

  1. InnerModuleEvaluation ( _module_, _stack_, _index_ )
    1. ...
    1. Let _evaluationList_ be « ».
    1. Perform BuildEvaluationList(_evaluationList_, _module_, _module_.[[RequestedModules]]).

  1. BuildEvaluationList ( _evaluationList_, _referrer_, _moduleRequests_ )
    1. For each ModuleRequest Record _request_ of _moduleRequests_, do
        1. Let _requiredModule_ be GetImportedModule(_referrer_, _request_.[[Specifier]]).
        1. If _request_.[[Phase]] is ~defer~, then
            1. Perform ListAppendUnique(_evaluationList_, GatherAsynchronousTransitiveDependencies(_requiredModule_)).
        1. Else if _evaluationList_ does not contain _requiredModule_, then
            1. Append _requiredModule_ to _evaluationList_.
        1. If _requiredModule_ is a Cyclic Module Record, then
            1. Let _importedNames_ be _request_.[[ImportedNames]].
            1. If importedNames = all, then
              1. Let allOptionalIndirectRequests be requiredModule.GetOptionalIndirectExportsModuleRequests(importedNames).
              1. Let seen be a new empty List.
              1. 3. Perform ListAppendUnique(evaluationList, GatherAsynchronousTransitiveDependenciesForRequests(requiredModule, allOptionalIndirectRequests, seen)).
            1. Else,
                1. ... 

  GatherAsynchronousTransitiveDependenciesForRequests collects async
  dependencies through deferred ModuleRequest Records when they would be
  forced by ImportedNames, which is ~all~ in this case.
flags: [module, async]
features: [export-defer, top-level-await]
includes: [asyncHelpers.js, compareArray.js]
---*/

import "./setup_FIXTURE.js";

asyncTest(async () => {
  const ns = await import("./tla-barrel_FIXTURE.js");
  assert.sameValue(ns.x, "tla-x", "deferred re-export `x` resolves to the TLA source's value");
  assert.compareArray(
    globalThis.evaluations,
    ["tla-barrel", "tla-async-dep"],
    "TLA source of a deferred re-export evaluates after the barrel body but completes before namespace access returns"
  );
});
