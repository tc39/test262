// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-innermoduleevaluation
description: >
  A module depending on an ~evaluated~ module that is part of a SCC that failed asynchronously
info: |
  Module graph:

                    ┌──────────────────┐     ┌────────────────────────┐
                    │     SCC root     │     │  importer of SCC leaf  │
                    └──────────────────┘     └────────────────────────┘
                       │  ▲       │  ▲          │
                       ▼  │       ▼  │          ▼
    ┌───────────────────────┐   ┌──────────────────┐
    │ SCC leaf (TLA, throw) │   │    SCC leaf 2    │
    └───────────────────────┘   └──────────────────┘

  And let's assume that we import "SCC root" first and then, once its evaluation settles,
  we import "importer of SCC leaf".

  This test exercises the case in which the condition in step 11.c.iv.3 of the following algorithm
  is true, when:
  - _module_ is "importer of SCC leaf",
  - _requiredModule_ is "SCC leaf",
  - _requiredModule_.[[CycleRoot]] is "SCC root".

  After the sync pass of the evaluation of "SCC root",
  - the [[Status]] of "SCC leaf 2" is ~evaluated~, because even though it's in an
    async SCC after breaking the cycles it has no async dependencies.
  - the [[Status]] of "SCC leaf (TLA, throw)" and "SCC root" are ~evaluating-async~.

  After that evaluation of "SCC leaf (TLA, throw)" resumes after the TLA, it throws
  and thus both its [[Status]] and "SCC root"'s [[Status]] are set to ~evaluated~,
  and their [[EvaluationError]] is set to the error thrown.

  When later evaluating "importer of SCC leaf", its dependency "SCC leaf 2" has [[Status]]
  set to ~evaluated~ and no [[EvaluationError]], but "SCC leaf 2"'s [[CycleRoot]] has a
  non-empty [[EvaluationError]].

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

flags: [module, async]
features: [top-level-await]
includes: [asyncHelpers.js]
---*/

asyncTest(async function() {
  const sccRootPromise = import("./evaluated-dep-from-async-errored-scc_scc-root_FIXTURE.js");
  await assert.throwsAsync(Error, () => sccRootPromise, "Importing scc-root should reject");
  const sccRootError = await sccRootPromise.catch(e => e);
  assert.sameValue(sccRootError, globalThis.evaluationError);

  const importerOfSccLeafPromise = import("./evaluated-dep-from-async-errored-scc_importer-of-scc-leaf_FIXTURE.js");
  await assert.throwsAsync(Error, () => importerOfSccLeafPromise, "Importing importer of SCC leaf should reject");
  const importerOfSccLeafError = await importerOfSccLeafPromise.catch(e => e);

  assert.sameValue(sccRootError, importerOfSccLeafError, "The errors should be the same");
});
