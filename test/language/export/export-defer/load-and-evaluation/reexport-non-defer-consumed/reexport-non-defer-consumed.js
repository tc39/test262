// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-moduleevaluation
description: >
  A plain (non-defer) re-export of a binding from a module that defers it
  forces the source to be loaded. When the entrypoint consumes x, barrel
  evaluates first, then its deferred dep, and consumer evaluates last.
info: |
  1. Evaluate ( [ _importedNames_ ] )
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
            1. ...
            1. Else,
                1. Let _optionalIndirectRequests_ be _requiredModule_.GetOptionalIndirectExportsModuleRequests(_importedNames_).
                1. Perform BuildEvaluationList(_evaluationList_, _requiredModule_, _optionalIndirectRequests_).

  Evaluate first runs InnerModuleEvaluation on the top-level module,
  evaluating its non-deferred dependencies, and only afterwards iterates
  _optionalIndirectRequests_ to evaluate the deferred sources. Consumer's
  plain `export { x } from barrel` makes barrel a non-defer dependency of
  consumer; barrel evaluates first, then barrel's deferred dep evaluates
  (appended after barrel in BuildEvaluationList via its optional indirect
  exports), and consumer — which depends on both — evaluates last.
flags: [module]
features: [export-defer]
includes: [compareArray.js]
---*/

import "../setup_FIXTURE.js";
import { x } from "./consumer_FIXTURE.js";

assert.sameValue(x, 42);
assert.compareArray(globalThis.evaluations, ['barrel', 'dep', 'consumer']);
