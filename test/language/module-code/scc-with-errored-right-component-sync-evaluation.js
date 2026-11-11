// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-innermoduleevaluation
description: >
  A module part of a SCC with an errored component on a right branch
info: |
  Module graph (the order of dependencies in each module is important, and it's left-to-right):
        ┌──────────────────────────────────┐
        │                  A               │
        └──────────────────────────────────┘
            │  ▲                     │  ▲
            │  │     ┌───────────┐   │  │
            │  │     │     D     │   │  │
            │  │     └───────────┘   │  │
            │  │           │  ▲      │  │
            ▼  │           ▼  │      ▼  │
        ┌───────────┐   ┌──────────────────┐
        │ B (throw) │   │        C         │
        └───────────┘   └──────────────────┘

  Let's assume that we import "A" first. InnerModuleEvaluation(A) will run InnerModuleEvaluation(B),
  which throws, bubbles up to the A.Evaluate() call, and sets both A and B to ~evaluated~ with
  an [[EvaluationError]].

  Then, we import "C". InnerModuleEvaluation(C) will run InnerModuleEvaluation(D), which will
  be evaluated, and then it will call InnerModuleEvaluation(A), finding an error in the SCC which
  aborts the evaluation process and sets C and D to ~evaluated~ with an [[EvaluationError]].

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
        a. For each Cyclic Module Record m of stack, do
          i. Assert: m.[[Status]] is evaluating.
          ii. Assert: m.[[AsyncEvaluationOrder]] is unset.
          iii. Set m.[[Status]] to evaluated.
          iv. Set m.[[EvaluationError]] to result.
        b. Assert: module.[[Status]] is evaluated.
        c. Assert: module.[[EvaluationError]] and result are the same Completion Record.
        d. Perform ! Call(capability.[[Reject]], undefined, « result.[[Value]] »).
      10. Else,
        ...
      11. Return capability.[[Promise]].

    InnerModuleEvaluation ( module, stack, index )
        ...
        11. For each ModuleRequest Record request of module.[[RequestedModules]], do
            a. Let requiredModule be GetImportedModule(module, request).
            b. Set index to ? InnerModuleEvaluation(requiredModule, stack, index).
            c. If requiredModule is a Cyclic Module Record, then
                i. Assert: requiredModule.[[Status]] is one of evaluating, evaluating-async, or evaluated.
                ii. Assert: requiredModule.[[Status]] is evaluating if and only if stack contains requiredModule.
                iii. If requiredModule.[[Status]] is evaluating, then
                    1. Set module.[[DFSAncestorIndex]] to min(module.[[DFSAncestorIndex]], requiredModule.[[DFSAncestorIndex]]).
                iv. Else,
                    1. Set requiredModule to requiredModule.[[CycleRoot]].
                    2. Assert: requiredModule.[[Status]] is either evaluating-async or evaluated.
                    3. If requiredModule.[[EvaluationError]] is not empty, return ? requiredModule.[[EvaluationError]].
        12. If module.[[PendingAsyncDependencies]] > 0 or module.[[HasTLA]] is true, then
          ...
        13. Else,
          a. Perform ? module.ExecuteModule().
        ...

flags: [module, async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function() {
  globalThis.D_evaluated = false;

  await assert.throwsAsync(
    Error,
    () => import('./scc-with-errored-right-component-sync-evaluation_A_FIXTURE.js'),
    'import of A should throw'
  );
  assert.strictEqual(globalThis.D_evaluated, false, 'importing A throws before evaluating D');

  await assert.throwsAsync(
    Error,
    () => import('./scc-with-errored-right-component-sync-evaluation_C_FIXTURE.js'),
    'import of C should throw'
  );
  assert.strictEqual(globalThis.D_evaluated, true, 'importing C throws after evaluating D');

  await assert.throwsAsync(
    Error,
    () => import('./scc-with-errored-right-component-sync-evaluation_D_FIXTURE.js'),
    'import of D should throw'
  );
});
