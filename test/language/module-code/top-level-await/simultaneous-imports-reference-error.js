// Copyright (C) 2025 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-moduleevaluation
description: >
  Simultaneous imports should not throw ReferenceError when importing module with top-level await
info: |
  Module Evaluation
    1. If module.[[TopLevelCapability]] is not empty, then
       a. Return module.[[TopLevelCapability]].[[Promise]].

  When multiple modules simultaneously import the same module with top-level await,
  no ReferenceError should be thrown during the import process.

flags: [module, async]
features: [top-level-await, dynamic-import]
includes: [asyncHelpers.js]
---*/

let continueExecution;
globalThis.promise = new Promise((resolve) => continueExecution = resolve);

const executionStartPromise = new Promise((resolve) => globalThis.executionStarted = resolve);

asyncTest(async function () {
  const importPromises = [];

  for (let i = 0; i < 5; i++) {
    importPromises.push(import("./simultaneous-imports-reference-error_FIXTURE.js"));
  }

  await executionStartPromise;

  continueExecution();

  const results = await Promise.all(importPromises);

  const firstResult = results[0];
  for (let i = 1; i < results.length; i++) {
    assert.sameValue(results[i], firstResult, 
      `Import ${i} should return the same module namespace`);
  }

  assert.sameValue(firstResult.exportedValue, "success", "Exported value should be correct");
  assert.sameValue(firstResult.importCount, 5, "Module should have been imported 5 times");
}); 