// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-innermoduleevaluation
description: Barrel evaluation order with one eager and one deferred re-export resolves as b -> barrel -> a -> entrypoint
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

  Modules that are re-exported using "defer" evaluates after the module that is
  re-exporting it.
flags: [module]
features: [export-defer]
includes: [compareArray.js]
---*/

import "../setup_FIXTURE.js";
import { a, b } from "./barrel_FIXTURE.js";

assert.sameValue(a, "a-value", "deferred re-export `a` resolves to the source's value");
assert.sameValue(b, "b-value", "eager re-export `b` resolves to the source's value");

globalThis.evaluations.push("entrypoint");

assert.compareArray(
  globalThis.evaluations,
  ["b", "barrel", "a", "entrypoint"],
  "evaluation order matches the bullet's expected b -> barrel -> a -> entrypoint"
);
