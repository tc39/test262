// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-innermoduleevaluation
description: A re-exporter using both `export defer { x }` and `export { y }` against the same source evaluates the source once, with the eager re-export controlling order
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
            1. ...
            1. Else,
                1. Let _optionalIndirectRequests_ be _requiredModule_.GetOptionalIndirectExportsModuleRequests(_importedNames_).
                1. Perform BuildEvaluationList(_evaluationList_, _requiredModule_, _optionalIndirectRequests_).

  When the same module appears in both an eager and a deferred ModuleRequest
  for a re-exporter, the eager request causes the source to evaluate before
  the re-exporter's body. The deferred request adds no additional evaluation
  because the source is already evaluated.
flags: [module]
features: [export-defer]
includes: [compareArray.js]
---*/

import "./setup_FIXTURE.js";
import { x, y } from "./same-source-barrel_FIXTURE.js";

assert.sameValue(x, "deferred-x", "deferred re-export `x` resolves to the shared source's value");
assert.sameValue(y, "eager-y", "eager re-export `y` resolves to the shared source's value");

assert.compareArray(
  globalThis.evaluations,
  ["same-source-dep", "same-source-barrel"],
  "the shared source evaluates exactly once; eager `export { y }` controls placement"
);
