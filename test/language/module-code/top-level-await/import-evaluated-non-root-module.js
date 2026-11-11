// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-moduleevaluation
description: >
  Import of an async module that is already evaluated, was not previously used
  as an entrypoint, and is not in a cycle, and thus has an [[CycleRoot]] that
  refers to itself and an empty [[TopLevelCapability]].
info: |
     Cyclic Module Record's Evaluate ( )
        1. Assert: This call to Evaluate is not happening at the same time as another call to Evaluate within the surrounding agent.
        2. Assert: module.[[Status]] is one of linked, evaluating-async, or evaluated.
        3. If module.[[Status]] is either evaluating-async or evaluated, set module to module.[[CycleRoot]].
        4. If module.[[TopLevelCapability]] is not empty, then
          a. Return module.[[TopLevelCapability]].[[Promise]].
        5. Let stack be a new empty List.
        6. Let capability be ! NewPromiseCapability(%Promise%).
        7. Set module.[[TopLevelCapability]] to capability.
        8. Let result be Completion(InnerModuleEvaluation(module, stack, 0)).
        9. If result is an abrupt completion, then
          ...
        10. Else,
          a. Assert: module.[[Status]] is either evaluating-async or evaluated.
          b. Assert: module.[[EvaluationError]] is empty.
          c. If module.[[Status]] is evaluated, then
            i. Assert: module.[[AsyncEvaluationOrder]] is not an integer.
            ii. Perform ! Call(capability.[[Resolve]], undefined, « undefined »).
          d. Assert: stack is empty.
        11. Return capability.[[Promise]].
flags: [module, async]
features: [top-level-await]
---*/

import "./import-evaluated-non-root-module_FIXTURE.js";

const ns = await import("./import-evaluated-non-root-module_FIXTURE.js");
assert.sameValue(ns.x, 1);

$DONE();
